import { ReactComponent as BitdefenderLogo } from "../../svg/logo.svg";
import { ReactComponent as DashboardIcon } from "../../svg/dashboard.svg";
import { ReactComponent as IncidentsIcon } from "../../svg/incidents.svg";
import { ReactComponent as NetworkIcon } from "../../svg/network.svg";
import { ReactComponent as RiskManagementIcon } from "../../svg/risk.svg";
import { ReactComponent as PoliciesIcon } from "../../svg/policies.svg";
import { ReactComponent as ReportsIcon } from "../../svg/reports.svg";
import { ReactComponent as QuarantineIcon } from "../../svg/quarantine.svg";
import { ReactComponent as CompaniesIcon } from "../../svg/companies.svg";
import { ReactComponent as AccountsIcon } from "../../svg/accounts.svg";
import { ReactComponent as SandboxAnalyzerIcon } from "../../svg/sandbox.svg";

export const menuItemsList = [
    {
        name: "",
        svg: <BitdefenderLogo className="logo" />,
    },
    {
        name: "Dashboard",
        svg: <DashboardIcon />,
    },
    {
        name: "Incidents",
        svg: <IncidentsIcon />,
    },
    {
        name: "Network",
        svg: <NetworkIcon />,
    },
    {
        name: "Risk Management",
        svg: <RiskManagementIcon />,
    },
    {
        name: "Policies",
        svg: <PoliciesIcon />,
    },
    {
        name: "Reports",
        svg: <ReportsIcon />,
    },
    {
        name: "Quarantine",
        svg: <QuarantineIcon />,
    },
    {
        name: "Companies",
        svg: <CompaniesIcon />,
    },
    {
        name: "Accounts",
        svg: <AccountsIcon />,
    },
    {
        name: "Sandbox Analyzer",
        svg: <SandboxAnalyzerIcon />,
    },
];
