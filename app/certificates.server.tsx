import type { Certificates } from "~/types";

export async function getCertificates() {
    const certificates: Certificates[] = [
      {
          blockchainId: '732838',
          title: 'Google Cloud Certified - Professional Cloud Developer',
      },
      {
          blockchainId: '672721',
          title: 'Google Cloud Certified - Professional Cloud Architect',
      }
    ];
    return certificates;
}
