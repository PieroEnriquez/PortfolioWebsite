export const Project = ({
        image = 'https://www.nbmchealth.com/wp-content/uploads/2018/04/default-placeholder.png', 
        title = "Here should be a title", 
        desc = "Oops! There's not a description yet, but stay tuned untill Piero updates this."
    }) => {
    return (
        <div className="project">
            <img className="project-img" alt="" src={image}></img>
            <h2 className="project-name">{title}</h2>
            <p className="project-desc">{desc}</p>
        </div>
    )
}



