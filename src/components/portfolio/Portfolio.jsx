import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/resumebuilder123.jpg'
import IMG2 from '../../assets/arkstudio123.jpg'
import IMG3 from '../../assets/stopwatch123.jpg'
import IMG4 from '../../assets/seedkaro123.jpg'
import IMG5 from '../../assets/imgtotext123.jpg'
import IMG6 from '../../assets/stackweb123.jpg'
import IMG7 from '../../assets/1.png'
import IMG8 from '../../assets/2.png'
import IMG9 from '../../assets/3.png'
import IMG10 from '../../assets/4.png'
import IMG11 from '../../assets/5.png'
import IMG12 from '../../assets/6.png'



// =======Generating Portfolio Items from Array using map method=====



const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Resume-Builder',
    github: 'https://github.com/FaizShaikh0705/Resume-Builder',
    demo: 'https://resume-builder5.netlify.app/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'ARK Studio',
    github: 'https://github.com/FaizShaikh0705/Html-Css-Project3',
    demo: 'https://faizshaikh0705.github.io/Html-Css-Project3/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Stop-Watch-Project',
    github: 'https://github.com/FaizShaikh0705/Stop-Watch-Project',
    demo: 'https://faizshaikh0705.github.io/Stop-Watch-Project/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Seedkaro Website',
    github: 'https://github.com/FaizShaikh0705/Html-Css-Bootstap-project4',
    demo: 'https://faizshaikh0705.github.io/Html-Css-Bootstap-project4/'
  },
  {
    id: 5,
    image: IMG5,
    title: 'image_to_text_convertor',
    github: 'https://github.com/FaizShaikh0705/image_to_text_convertor',
    demo: 'https://img2text.netlify.app/'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Stack Website',
    github: 'https://github.com/FaizShaikh0705/compitition-website',
    demo: 'https://stack-web.netlify.app/'
  },
  {
    id: 7,
    image: IMG7,
    title: 'Recurring Deposit',
    github: 'https://github.com/FaizShaikh0705/bissi-aap',
    demo: 'https://bissi-app.netlify.app/deposits'
  },
  {
    id: 8,
    image: IMG8,
    title: 'Safari Website',
    github: 'https://safari-kids.netlify.app/',
    demo: 'https://safari-kids.netlify.app/'
  },
  {
    id: 9,
    image: IMG9,
    title: 'Mens Fashion Dashboard',
    github: 'https://github.com/FaizShaikh0705/daniya-collection',
    demo: 'https://daniyal-collection.netlify.app/stockIn'
  },
  {
    id: 10,
    image: IMG10,
    title: 'Games For Autastic/NonAutastic',
    github: 'https://github.com/FaizShaikh0705/fun-games',
    demo: 'https://games0705.netlify.app/Home'
  },
  {
    id: 11,
    image: IMG11,
    title: 'Verb Game',
    github: 'https://github.com/FaizShaikh0705/react-verb-game',
    demo: 'https://react-verb-game.netlify.app/'
  },
  {
    id: 12,
    image: IMG12,
    title: 'Gammer Randon Question Game',
    github: 'https://github.com/FaizShaikh0705/react-random-number-game',
    demo: 'https://random-number-game1.netlify.app/'
  }
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} height='252' width='343' />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className="btn" target='_blank'>Github</a>
                  <a href={demo} className="btn btn-primary" target='_blank'>View Project</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio


// const Portfolio = () => {
//   return (
//     <section id='portfolio'>
//       <h5>My Recent Work</h5>
//       <h2>Portfolio</h2>

//       <div className="container portfolio__container">
//         <article className="portfolio__item">
//           <div className="portfolio__item-image">
//             <img src={IMG1} alt="" />
//           </div>
//           <h3>This is a portfolio item title</h3>
//           <div className="portfolio__item-cta">
//           <a href="" className="btn" target='_blank'>Github</a>
//           <a href="" className="btn btn-primary" target='_blank'>Live Demo</a>
//           </div>
//         </article>

//         <article className="portfolio__item">
//           <div className="portfolio__item-image">
//             <img src={IMG2} alt="" />
//           </div>
//           <h3>This is a portfolio item title</h3>
//           <div className="portfolio__item-cta">
//           <a href="" className="btn" target='_blank'>Github</a>
//           <a href="" className="btn btn-primary" target='_blank'>Live Demo</a>
//           </div>
//         </article>

//         <article className="portfolio__item">
//           <div className="portfolio__item-image">
//             <img src={IMG3} alt="" />
//           </div>
//           <h3>This is a portfolio item title</h3>
//           <div className="portfolio__item-cta">
//           <a href="https://github.com/FaizShaikh0705/Stop-Watch-Project" className="btn" target='_blank'>Github</a>
//           <a href="https://faizshaikh0705.github.io/Stop-Watch-Project/" className="btn btn-primary" target='_blank'>Live Demo</a>
//           </div>
//         </article>

//         <article className="portfolio__item">
//           <div className="portfolio__item-image">
//             <img src={IMG4} alt="" />
//           </div>
//           <h3>This is a portfolio item title</h3>
//           <div className="portfolio__item-cta">
//           <a href="" className="btn" target='_blank'>Github</a>
//           <a href="" className="btn btn-primary" target='_blank'>Live Demo</a>
//           </div>
//         </article>

//         <article className="portfolio__item">
//           <div className="portfolio__item-image">
//             <img src={IMG5} alt="" />
//           </div>
//           <h3>This is a portfolio item title</h3>
//           <div className="portfolio__item-cta">
//           <a href="" className="btn" target='_blank'>Github</a>
//           <a href="" className="btn btn-primary" target='_blank'>Live Demo</a>
//           </div>
//         </article>

//         <article className="portfolio__item">
//           <div className="portfolio__item-image">
//             <img src={IMG6} alt="" />
//           </div>
//          <h3>This is a portfolio item title</h3>
//          <div className="portfolio__item-cta">
//           <a href="" className="btn" target='_blank'>Github</a>
//           <a href="" className="btn btn-primary" target='_blank'>Live Demo</a>
//           </div>
//         </article>
//       </div>
//     </section>
//   )
// }

// export default Portfolio