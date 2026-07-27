const fs = require('fs');
let code = fs.readFileSync('src/components/Navbar.tsx', 'utf8');

// replace the state hook to include the account dropdown
code = code.replace(
    'const [isOpen, setIsOpen] = useState(false);',
    'const [isOpen, setIsOpen] = useState(false);\n    const [isAccountOpen, setIsAccountOpen] = useState(false);'
);

// update the avatar Replacement
const newAvatar = `
            <div className="account-dropdown-container" style={{position: 'relative'}}>
                <div className="profile-avatar" onClick={() => setIsAccountOpen(!isAccountOpen)} style={{cursor: 'pointer'}}></div>
                {isAccountOpen && (
                    <div className="dropdown-menu" style={{display: 'block', right: 0, left: 'auto', padding: '15px', minWidth: '200px', marginTop: '10px'}}>
                        <h4 style={{marginBottom: '10px', color: 'white', fontWeight: 'bold'}}>Account Login</h4>
                        <input type="text" placeholder="Username" style={{width: '100%', marginBottom: '10px', padding: '8px', background: '#222', border: '1px solid #444', color: 'white', borderRadius: '4px', outline: 'none'}} />
                        <input type="password" placeholder="Password" style={{width: '100%', marginBottom: '10px', padding: '8px', background: '#222', border: '1px solid #444', color: 'white', borderRadius: '4px', outline: 'none'}} />
                        <button style={{width: '100%', padding: '8px', background: '#10b981', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold'}} onClick={() => setIsAccountOpen(false)}>Login</button>
                    </div>
                )}
            </div>
`;

code = code.replace(/<div className="account-dropdown-container"[\s\S]*?<\/style>/, newAvatar);
fs.writeFileSync('src/components/Navbar.tsx', code);
console.log('patched navbar React state for account dropdown');
