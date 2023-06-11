import './globals.css'
import ToasterContext from './context/ToasterContext';
import { currentUser } from './action/getCurrentUser';
import Nav from './components/Navbar';
export default async function RootLayout({ children }) {
  const user = await currentUser();
  return (
    <html lang="en">
      <body className='bg-white' >
        <ToasterContext/>
        <Nav user={user}/>
        {children}
        
        </body>
    </html>
  )
}
