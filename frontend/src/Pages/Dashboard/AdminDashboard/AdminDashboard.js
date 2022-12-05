import React, { useState } from 'react'
import "./AdminDashboard.css"
import AddTransaction from './Components/AddTransaction'
import AddMember from './Components/AddMember'
import AddBook from './Components/AddBook';

import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import BookIcon from '@material-ui/icons/Book';
import ReceiptIcon from '@material-ui/icons/Receipt';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import { IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import GetMember from './Components/GetMember';
import AssignmentReturnIcon from '@material-ui/icons/AssignmentReturn';
import Return from './Components/Return';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';


/* Semantic UI Dropdown Styles Import */
const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

function AdminDashboard() {

    const [active, setActive] = useState("addbooks")
    const [sidebar, setSidebar] = useState(false)

    /* Logout Function*/
    const logout = () => {
        localStorage.removeItem("user");
        window.location.reload();
    }


    return (
        <div className="dashboard">
            <div className="dashboard-card">
                <div className="sidebar-toggler" onClick={() => setSidebar(!sidebar)}>
                    <IconButton>
                        {sidebar ? <CloseIcon style={{ fontSize: 25, color: "rgb(234, 68, 74)" }} /> : <DoubleArrowIcon style={{ fontSize: 25, color: "rgb(234, 68, 74)" }} />}
                    </IconButton>
                </div>

                {/* Sidebar */}
                <div className={sidebar ? "dashboard-options active" : "dashboard-options"}>
                    <div className='dashboard-logo'>
                        <LibraryBooksIcon style={{ fontSize: 50 }} />
                        <p className="logo-name">LCMS</p>
                    </div>
                    <p className={`dashboard-option ${active === "profile" ? "clicked" : ""}`} onClick={() => { setActive("profile"); setSidebar(false) }}><AccountCircleIcon className='dashboard-option-icon' /> Profile</p>
                    <p className={`dashboard-option ${active === "addbook" ? "clicked" : ""}`} onClick={() => { setActive("addbook"); setSidebar(false) }}><BookIcon className='dashboard-option-icon' />Add Book</p>
                    <p className={`dashboard-option ${active === "addtransaction" ? "clicked" : ""}`} onClick={() => { setActive("addtransaction"); setSidebar(false) }}><ReceiptIcon className='dashboard-option-icon' /> Add Transaction </p>
                    <p className={`dashboard-option ${active === "getmember" ? "clicked" : ""}`} onClick={() => { setActive("getmember"); setSidebar(false) }}><AccountBoxIcon className='dashboard-option-icon' /> Get Member </p>
                    <p className={`dashboard-option ${active === "addmember" ? "clicked" : ""}`} onClick={() => { setActive("addmember"); setSidebar(false) }}><PersonAddIcon className='dashboard-option-icon' /> Add Member </p>
                    <p className={`dashboard-option ${active === "returntransaction" ? "clicked" : ""}`} onClick={() => { setActive("returntransaction"); setSidebar(false) }}><AssignmentReturnIcon className='dashboard-option-icon' /> Return </p>
                    <p className={`dashboard-option`} onClick={logout}><PowerSettingsNewIcon className='dashboard-option-icon' /> Log out </p>

                </div>
                <div className="dashboard-option-content">
                    <div className="dashboard-addbooks-content" style={active !== "addbook" ? { display: 'none' } : {}}>
                        <AddBook />
                    </div>
                    <div className="dashboard-transactions-content" style={active !== "addtransaction" ? { display: 'none' } : {}}>
                        <AddTransaction />
                    </div>
                    <div className="dashboard-addmember-content" style={active !== "addmember" ? { display: 'none' } : {}}>
                        <AddMember />
                    </div>
                    <div className="dashboard-addmember-content" style={active !== "getmember" ? { display: 'none' } : {}}>
                        <GetMember />
                    </div>
                    <div className="dashboard-addmember-content" style={active !== "returntransaction" ? { display: 'none' } : {}}>
                        <Return />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminDashboard