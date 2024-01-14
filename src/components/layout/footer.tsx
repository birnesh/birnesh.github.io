import { IconCopyright } from '@tabler/icons-react';
const Footer = () =>{

return (
    <footer className="w-full bg-gray py-6">
        <div className="flex items-center justify-center gap-1">
            <IconCopyright  className="mr-1 inline-block h-4 w-4"/>
            {new Date().getFullYear()} |&nbsp;
            Developed  with ❤️️ by Birnesh Eswaramoorthy
        </div>
    </footer>
)

}

export default Footer