import {GithubLogoIcon, LinkedinLogoIcon} from '@phosphor-icons/react'

function Footer() {

    return (
        <>
            <div className="flex justify-center bg-cyan-300 text-black ">
                <div className="container flex flex-col items-center py-4">
                    <p className='text-xl font-bold'>
                        Portfolio Ewertton Gonçalves 
                    </p>
                    <p className='text-lg'>Acesse minhas redes sociais</p>
                    <div className='flex gap-2'>
                        <LinkedinLogoIcon size={48} weight='bold' />
                        <GithubLogoIcon size={48} weight='bold' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
