/**
 * Canton IAM Service
 * Centralized Identity & Access Management for Canton Ledger
 */
  //===============================================
  // WILL HAVE TO FETCH ADMIN TOKEN FROM A BACKEND IAM SERVER IN REAL LIFE. THIS IS TEMPORARY

class CantonIAM {
  private static instance: CantonIAM;
  private readonly baseUrl: string = '/'; 
  private readonly ledgerId: string = 'sandbox';
  private readonly applicationId: string = 'CantonSuite_App';

  private constructor() {}

  static getInstance(): CantonIAM {
    if (!CantonIAM.instance) {
      CantonIAM.instance = new CantonIAM();
    }
    return CantonIAM.instance;
  }

  //===============================================
  // WILL HAVE TO FETCH ADMIN TOKEN FROM A BACKEND IAM SERVER IN REAL LIFE. THIS IS TEMPORARY
  // =
  // ============================================
  // TOKEN GENERATION
  // ============================================
  // ============================================
 
  private base64UrlEncode(str: string): string {
    return btoa(str)
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=+$/, '');
  }

  private createJWT(claims: Record<string, any>): string {
    const header = { alg: 'HS256', typ: 'JWT' };
    const encodedHeader = this.base64UrlEncode(JSON.stringify(header));
    const encodedPayload = this.base64UrlEncode(JSON.stringify(claims));
    return `${encodedHeader}.${encodedPayload}.dummy_signature`;
  }

  createAdminToken(): string {
    return this.createJWT({
      'https://daml.com/ledger-api': {
        ledgerId: this.ledgerId,
        applicationId: this.applicationId,
        admin: true
      }
    });
  }

  /**
   * Generate user token with specific party permissions
   * UPDATED: Accepts optional 'publicParty' to grant ReadAs rights
   */
  createUserToken(partyId: string, publicParty?: string): string {
    const readAs = [partyId];
    
    // Crucial: Allow user to read public contracts (Marketplace Assets)
    if (publicParty) {
      readAs.push(publicParty);
    }

    return this.createJWT({
      sub: partyId,
      'https://daml.com/ledger-api': {
        ledgerId: this.ledgerId,
        applicationId: this.applicationId,
        actAs: [partyId],
        readAs: readAs
      }
    });
  }

  // ============================================
  // PARTY MANAGEMENT
  // ============================================

  async discoverParties(): Promise<Record<string, string>> {
    const adminToken = this.createAdminToken();
    
    const response = await fetch(`${this.baseUrl}v1/parties`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${adminToken}`,
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`Failed to discover parties: ${response.statusText}`);
    }

    const data = await response.json();
    const partyMapping: Record<string, string> = {};
    const resultList = data.result || [];
    
    // Map known roles to their full party IDs
    const knownRoles = ['Issuer1', 'Issuer2', 'Alice', 'Bob', 'Compliance', 'Regulator', 'Public'];
    
    resultList.forEach((detail: any) => {
      const fullPartyId = detail.identifier;
      const displayName = detail.displayName || '';
      
      knownRoles.forEach(role => {
        if (
          fullPartyId === role ||
          fullPartyId.startsWith(`${role}::`) ||
          displayName === role
        ) {
          partyMapping[role] = fullPartyId;
        }
      });
    });

    this.cachePartyMap(partyMapping);
    return partyMapping;
  }

  async allocateParty(displayName: string): Promise<string> {
    const adminToken = this.createAdminToken();
    const identifierHint = displayName.trim().replace(/[^a-zA-Z0-9]/g, '_').toLowerCase();

    const response = await fetch(`${this.baseUrl}v1/parties/allocate`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${adminToken}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        identifierHint,
        displayName
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.errors?.[0] || `Party allocation failed: ${response.statusText}`);
    }

    const data = await response.json();
    return data.result.identifier;
  }

  // ============================================
  // SESSION MANAGEMENT
  // ============================================

  cachePartyMap(partyMap: Record<string, any>): void {
    localStorage.setItem('cantonPartyMap', JSON.stringify(partyMap));
  }

  getCachedPartyMap(): Record<string, string> {
    const cached = localStorage.getItem('cantonPartyMap');
    return cached ? JSON.parse(cached) : {};
  }

  getPartyByRole(role: string): string | null {
    const partyMap = this.getCachedPartyMap();
    return partyMap[role] || null;
  }

  setSession(token: string, partyId: string): void {
    localStorage.setItem('canton_token', token);
    localStorage.setItem('canton_party', partyId);
  }

  clearSession(): void {
    localStorage.removeItem('canton_token');
    localStorage.removeItem('canton_party');
    localStorage.removeItem('cantonPartyMap');
  }
}

export default CantonIAM;