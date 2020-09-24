import React from 'react';
import "./Sidebar.css";
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import { Avatar, IconButton } from '@material-ui/core';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { SearchOutlined } from '@material-ui/icons';
import SidebarChat from "./SidebarChat";

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <Avatar  src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAIkAiQMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAABAgMEBQYAB//EAEIQAAEDAgQCBwUFBgQHAQAAAAEAAgMEEQUSITFBUQYTMmFxgZEiQlKxwRQzcqHRByM0guHwQ1NiohY1c5Ky0vEV/8QAGQEAAwEBAQAAAAAAAAAAAAAAAAECAwQF/8QAIhEAAgIDAQACAgMAAAAAAAAAAAECEQMhMRIiQVFxBBMU/9oADAMBAAIRAxEAPwDx66SiixjpHtZG0uc42AA3QAAC4hrQS46AAXJV/LJPR08WDYcy9Y72p3tPYJ315gaeXMpimgfhkrGwMbUYrIcsTWjMyAnck8XW9E9ic8fR+mNJSv6zEJReec6kX+v/ANXdhh4i5SMpO2Ml1DgIOa1ViB7WujD/AH5qoqcTnq5g+pdmaDcRjRqhOcXG51J3PNdax107llPM2qWkUo0WMRfiE5lrpSIIxmeRwHAAd6Zrqs1Lw1rerhZpHGNmj9e9MOmc6MRizWDgOJ5nvTd1Dnqh0FOU8TppWxx2zONk2nGSFjHtZoX6OPG3JRHuxkutqmdUKOlNqdhuXf5r/iPdyCdwPG6nBavr4bPBFnMfsR9FWrlosklL0hNJ6Z7d0dx2lxmlE1M+zho+N3aYe9XkjIa2klpalofDMwse08QdF4Hg2K1OD1rKmmO3aadnjkV650cx+DFqfrWPaHBxBbfUf3cL1sGeOePmXTiy4njfpHknSbCJcDxiehkuWsN43n32Hsn0VSvTP2t07JYaGuFs7XGInm06i/gfmV5ovIz4/wCvI4nZjl6imdwQRQWJZYFSKGrdSygsc2O+hk6sOcB3XTBGql4RTR1GIRCf7hl5JrfA0XI8wLeaqN2qE+Gu62PC8EGMTwhsjmBtNE43cAdrnme0SvPKiWSpmfNK8vkeczieJWo6f18k1RS0byA6KPrJWg6B7uHkNFVYFDFA1+J1jbwwG0bT/iScB5brszNzmsa4jOCpWzpqOPCqWOSqAdWytuyE7Rj4nd/cqp7i9xcTcnUlOVtVLW1MlRObve65TC5ptN1HhoghFAKRRUktbN1cQ21c47NHMqUm3SAZAPJEgtNjoVLqX09ODDREvI0dOdz+HkFCun
                JUAVy5ckBynYVik+GS54HEAkEtB4jZQVyqM3F2hNWqZ65icUXSLAcjbHros8Z5Otdv52/NePkHW69C6G4if/yo45HaxyFg+f1WP6QwCmxqsiaPZ60uHgdR812fzV7jHKvsyw/FuJWoIrl5xuWJ3Wm6FYa6pfV1cjXGnia2N1h2iXBxaPENt/MFmcwut1hGKw4R0HEzz1UlRM9lOAAXOto54GwsbjXkL3Nlvgr3b+jPI3WjIYvFPifSSoih/eTyS5XEajNsfIbeATGN1MRl
                jo6V16WlGRhHvu953mVoGVbKTo+6emo2wT1UhhpNcz5RoC4nuu7zKyFXG2Gd0TXB2Q5S4bE8VeXStfY47GrG64i26mxQtiojVyi5c7JC3meJ8vmoZNysGqKDGx0jw1jbkmwVhVVTYKb7FSkZf8aQbyO/RQGSFhu3fnySbpqVLQHcUbFO0sHXv1dlY0Znu5AJEjw5xLW5RwbfYJVoBK5c0FxAAJJ2SyztHg3cpAIXLkLpgXuC1Jp8NmeDrHOx30+Sj9KjfGJH/Gxh/wBoH0UeCTJhVSPje0D5pePPz1jHb3hZ8l0zneFRJS+VlaglILjLHOtdcXU+hM2K4hQ0ksloxliuPcjFy4+QLiq0n5KZhWJS4ZU/aKdsbpLZRnbcAG1/PgmuiNIK1tbi1ZUdQYocNpX9RE7aJjRlY0d9zcnyWVpoH1VRHBGLvkcGt81o8MoKr/huvl7UmIyRxR3OpDXZ3OPIbb81MwzDqKgY2vp5PtApopXun2a5wAADRy1PiuuOOU6v9kOVGcx2Rn2w00JvDTNELe+258zdVqLy5z3OduTcpK55O5FpHI37kBullhAaToHbd6kY+Zgyl6iM6vOZ5+QTMUb5XZWAkpRgkztZb23W9niPFXlLRimitoXHVxHFTKZUY2VrIZIvZZGM7h2ydvJNzsLctPGc3O3EqxkyxyG4cSRvlJTTnNDrtie5198tgpspxorqhgjeGjX2RcpoJ6sN5zfkLDkmFouGbH3O/cMiHF2Y+OwTmKuvWPHwBrfQD63Qp47ETydhl3W52/qoz3l7nOdqSblU3oQk7IJV9ELlZjOP0XDh4oklAbhAFxUY5VSUEdDC2OGmij6tjYxrqbuJPEnirno7UMm6L4hT1OkUEsdzzD3beouseTqdSpFNVyQ01TTtsY6hoDwe43BW2PK4ytkyjaJeK0zPtdS+H7qzZY7DQsJH6/kq3KeR5bLR4MaSsggppDaoLTHmPwggj1JP/arfBOjrMRwwlv3kVbK2p07JynL5bfmlmqMVNfZWNOUvJlaDCJ6xjXNbbrDZpPIbnwHzVjTYU6aofMGjqov3cIdxtx79Vu5KOOJuWNgaMuXTkNgq+SBrGhjWgNaLADguF574dn
                +dLpnqbDWUznyuJfM73jwS3tVvDA2SrgjcAQ+RrSDxuVM6a9HZOj2NzUpDjTvOenkOuZh+o28kerJcVHRRCDDThb5X1NQMQDrNpxCCxw55r6eiqKmVkDCXang3mrB7VVyYbVYjXtgpYy+SR4Y0cyeA7lcSJaKaR5keXO3Kcp4usddxsxou48glz02SplhikbK2Nxb1jdnW4hIldZojb2W7nmV0LRgSKx46lgYLB4BDeQG31UFEuuPBC6TdgGxtsULI3NkLlIBRHeNuaAGu49UD9Fw3CACRruPVEDvHqkncot4+CAHI5HxSNfG4BzDcELX9Aek0eB4u6oxP95h1fIYqxg3A3EgHNpPoSsWBc2CdgidLIyNu73hotzJsjqoOHvOP4X9im/dvEtPK3PBM03bI08QVnZ491sg6HCQ/A62IuoIXlsQaPaiHNo+nFU2M4VJSsbNG5s1JLrFUR6td+h7lw5IeJHo4snuOzJTRzCpDmlvVBpuOObS31UnHMZxHGWUrcSn600zMkZtY67k8zoNe4JVQyJssUc07I87rZ5SA0eJ4IYtTUMMwbh1XLVRhvtSOZlaT/pG9vFNMUkrKN7VOxCUdF8EMrzbGcTiLaeP3qando6Q8nO2b3XKuKCghwtkeI4pCJZnWNHQneU8HPHBl/XwuqL9peF1jaPDcZrHdZPVyStmk5kWIA7hdwHgt4RvbObJJLSMSyQRte0EatsPHmo9u8Lv0SVsYC7abj1Qt3j1QGxQQAq2m49ULd4XcEEAKIHeuAF+PogVw3CACQL8fRFoGu+3JJO5Umho5auojhYMvWODcxGgvpdAErD8MZPF9qqZHQUbTlMgbd0jvgY3ifyHE89J0Ow6DGemmC4fR0gijE4kk9ove5rPaJc7+UbADuVbjk1K6WM0M2akiZ1UDC3KY2tPEXPa7V+Nzsp37M8VfhfTSk
                rbXjDXNl7mEWJ+SvyKz1TpzO1+PVYbsCAPHKFn6LGqqgkkFP1crJfvqSb7qo/8AV/Jw/oldJavrcXrHXuDK6xHHVZ6eS97nRaZMcZIzx5HFmn6nC8bzvwqqip5m6zUFdII5IfBx0e3vCiT1eFYUctCYsVxAG3XWJpoD3f5jv9oWZbiVFUtIqI453NFmOJF7jgjSVkUwL4XNIGns7DuC5IYLlTOueb49L+kzOqHVdbK6eqkN3SPNyrj9qtW+n6D9Hp4XNa0y5ZI3C7ZAWG4I4i/93WXiqbcV37UMQ+1YPhNFHJdtC1vWAbGRzdfTT1K7JRSikjkTblbMNidDC2NlbSBzaWUlpjLrmF9r5SeII1B4jwKq7Dv9FZ0FQMk1NMQIqhuVxPukatd5H8iVXOjeBoCRe2iwaNRNhbiusO/0XW0QSANhbihYcz6LuCCAHmxOd2Yz8k62kfu7KB4lSC+25Tb5xw1V0hWKZDFGM1r24uXR1DxOHscW5eyRuOCjvlc/c6clzXWa4+Sd/gBcr8wNudlcdEWg1VQ88I8t/E/0VFf2P5gr7oucrKl3MgfNEeilw0clQ57czjrx8VAr6lkEL3yatA1HPuSi+ziCdDqs7jcxnnLB2Ih7XK/9/VaSkRFbIL4y+J9Q1rWx58thw4rS4c2GKljfA3KHtBcb7qnqWdVhEDeL3hx9FOwZ5kw8MdswkfmoXSnwtutyXceGqgY88vwuTMbuzhxPff8Aqni4vytPifJRsWu7D5h3A+hVN6JXTNB1jonBJlOYbHdMpQO4WRoSS1kguQPJNOgHu280hry03CeZJcJgMOY5u7PmkafCpl0fJFBZGLi7coXQQSAKV7nmko+55lAB93zV70dNqSU85PoFRe4PFXnR/wDhJP8AqH5BVEUuFlUyiKB8jtQxuayzbml0MQd26iXMfDb6lXmJ/wDLp/w/UKmH8Vh34Y//ACTl0USXjtmwRgbB/wBEvBTkE8fwvBTWP/cs/H9E7hn8TVeLfqkug+FjYXJ5qPX60Uw/0FPpis/hZfwFU+CRmFwNlx2QWZYTobLgTwXO7RQQAsPcOKPWO5psrkwP/9k='/>
                <div className="sidebar__headerRight">
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>        
                </div>
            </div>
            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchOutlined />
                    <input placeholder="Serach or start a new chat.." type="text" />

                </div>
            </div>
            <div className="sidebar__chats">
                <SidebarChat />
                <SidebarChat />
                <SidebarChat /> 
            </div>
        </div>
    );
}

export default Sidebar


