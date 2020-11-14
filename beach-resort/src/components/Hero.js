import React from 'react'

/* we pass children as prop because we want to keep the "Back to rooms" section 
in the banner */
/* We pass the hero prop as a ClassName */
export default function Hero({ children, hero }) {
    return (
        <header className={hero}>
            {children}
        </header>
    )
}

Hero.defaultProps = {
    hero: "defaultHero"
}