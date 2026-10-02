const rawData = [
    {
        ProjectName: 'Site E-commerce',
        ProjectType: 'E-commerce',
        ProjectStatus: 'Em desenvolvimento',
        ProjectDeadline: '17/05/2026',
        ProjectDescription: 'E-commerce com painel de administrador e login de usuários para cupons',
        ClientName: 'YAHE Doces',
        ClientType: 'Jurídica',
        ClientEmail: 'contato@yahedoces.com',
        ClientPhoneNumber: '(14) 99999-9999',
        ResponsibleName: 'Arnaldo Hidalgo',
        NumberProjects: 2
    }
]

export const PROJECTS = [
    {
        Name: rawData[0].ProjectName,
        Client: rawData[0].ClientName,
        Type: rawData[0].ProjectType,
        Status: rawData[0].ProjectStatus,
        Deadline: rawData[0].ProjectDeadline,
        Description: rawData[0].ProjectDescription,
    }
]

export const CLIENTS = [
    {
        Name: rawData[0].ClientName,
        Type: rawData[0].ClientType,
        Email: rawData[0].ClientEmail,
        PhoneNumber: rawData[0].ClientPhoneNumber,
        ResponsibleName: rawData[0].ResponsibleName,
        NumberProjects: rawData[0].NumberProjects
    }
]