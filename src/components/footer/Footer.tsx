import {GithubLogoIcon, LinkedinLogoIcon} from '@phosphor-icons/react'

function Footer() {

    return (
        <div className="flex justify-center bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-400 text-black shadow-lg">
            <div className="container flex flex-col items-center py-8 px-6 gap-4">
                <p className='text-xl font-bold text-gray-800'>
                    Portfolio Ewertton Gonçalves 
                </p>
                <p className='text-base text-gray-700 font-medium'>Acesse minhas redes sociais</p>
                <div className='flex gap-4 mt-2'>
                    <a 
                        href='https://www.linkedin.com/in/ewerttongoncalves/' 
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-gray-800 hover:text-blue-600 transition-all duration-300 hover:scale-125 hover:-translate-y-1'
                    >
                        <LinkedinLogoIcon size={48} weight='bold' />
                    </a>
                    
                    <a 
                        href='https://github.com/ewerttongoncalvesdev' 
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-gray-800 hover:text-gray-900 transition-all duration-300 hover:scale-125 hover:-translate-y-1'
                    >
                        <GithubLogoIcon size={48} weight='bold' />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer