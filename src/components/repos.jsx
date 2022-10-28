import { useEffect, useState } from "react"

const GITHUB_API = 'https://api.github.com/users/PieroEnriquez'

export const Repos = props => {
    const [repos, setRepos] = useState()

    useEffect(() => {
        fetch(GITHUB_API)
            .then(res => res.json())
            .then( (response) => {
                const repos = response.public_repos
                setRepos(repos)
            })
    }, [])

    return (
        <>
            <p className='projects-presentation'>
                From {repos} repositories, here are the most important ones.
            </p>
        </>
    )
}