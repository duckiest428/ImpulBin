const fs = require('fs');
let code = fs.readFileSync('src/components/Navbar.tsx', 'utf8');

const avatarReplacement = `
            <div className="account-dropdown-container" style={{position: 'relative'}}>
                <div className="profile-avatar" onClick={() => document.getElementById('account-dropdown').classList.toggle('show')}></div>
                <div id="account-dropdown" className="dropdown-menu account-dropdown" style={{right: 0, left: 'auto', padding: '15px', minWidth: '200px'}}>
                    <h4 style={{marginBottom: '10px', color: 'white'}}>Login</h4>
                    <input type="text" placeholder="Username" style={{width: '100%', marginBottom: '10px', padding: '8px', background: '#222', border: '1px solid #444', color: 'white', borderRadius: '4px'}} />
                    <input type="password" placeholder="Password" style={{width: '100%', marginBottom: '10px', padding: '8px', background: '#222', border: '1px solid #444', color: 'white', borderRadius: '4px'}} />
                    <button style={{width: '100%', padding: '8px', background: '#10b981', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold'}}>Login</button>
                </div>
            </div>
            <style>
                {\`
                    .account-dropdown-container .account-dropdown {
                        display: none;
                        position: absolute;
                        top: 100%;
                        z-index: 100;
                    }
                    .account-dropdown-container .account-dropdown.show {
                        display: block;
                    }
                \`}
            </style>
`;

code = code.replace(/<div className="profile-avatar"><\/div>/, avatarReplacement);
fs.writeFileSync('src/components/Navbar.tsx', code);
console.log('patched navbar avatar');
