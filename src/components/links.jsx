export const Link = ({link, image}) => {
    return (
        <>
            <a href={link} className='social-media' target='_blank' rel='noreferrer'>
                <img className='media-logo' alt='' src={image} />
            </a>
        </>
    )
}

