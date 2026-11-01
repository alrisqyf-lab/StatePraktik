export interface ServiceItems {
    id: number;
    domainName: string;
    packageName: string;
    expDate: string;
    status: "Active" | "Pending" | "Expired";
}

export const ServiceItems: ServiceItems[] = [
    {id: 10, domainName: "Budigalaxy.com", packageName: "Domain .ID", expDate: "15 Oktober 2027", status: "Pending"},
    {id: 11, domainName: "Rule34.go", packageName: "Hosting 100TB", expDate: "16 Juli 2030", status: "Active"},
    {id: 12, domainName: "MaduraAsli.co.id", packageName: "Email Hosting", expDate: "5 Januari 2025", status: "Expired"},
    {id: 13, domainName: "Badan Gizi Nasional.go.id", packageName: "Paket lengkap", expDate: "19 Agustus 2045", status: "Active"},
    {id: 14, domainName: "XNXX.com", packageName: "Paket lengkap", expDate: "27 Desember 2050", status: "Active"}

]
export default ServiceItems;