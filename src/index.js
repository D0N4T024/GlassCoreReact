import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './screens/home/App';
import Ranking from './screens/ranking/Ranking';
import { AsideBar } from './components/AsideBar';
import { TopBar } from './components/TopBar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



/*import './index.css';
//import { Inter } from 'next/font/google';
//import { AsideBar } from './components/AsideBar.js';

//const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'GlassCore',
  description: 'Academic System',
}

export default function RootLayout({ children }) {
  return (
    
    <html lang="en">

      {//<body className={inter.className}>
      }
      <body>
        
        {//<AsideBar/>
        }
        <p>Hello</p>
        {children}
      </body>
      
    </html>
    
  )
}*/
