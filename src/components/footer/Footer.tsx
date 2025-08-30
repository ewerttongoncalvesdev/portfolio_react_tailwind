import {GithubLogoIcon, LinkedinLogoIcon} from '@phosphor-icons/react'

function Footer() {

    return (
        <>
            <div className="flex justify-center bg-cyan-300 text-black ">
                <div className="container flex flex-col items-center">
                    <p className='text-xl font-bold'>
                        Portfolio Ewertton Gonçalves 
                    </p>
                    <p className='text-lg'>Acesse minhas redes sociais</p>
                    <div className='flex gap-2'>
                        <a href='https://www.linkedin.com/in/ewerttongoncalves/' target='_blank'>
                        <LinkedinLogoIcon size={48} weight='bold' />
                        </a>
                        
                        <a href='https://github.com/ewerttongoncalvesdev' target='_blank'>
                        <GithubLogoIcon size={48} weight='bold' />
                        </a>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
