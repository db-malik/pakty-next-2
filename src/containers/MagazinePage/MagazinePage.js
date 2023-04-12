import React from 'react'
import CardArticle from '../../components/cards/cardArticle/CardArticle'
import Filter from '../../components/filter/Filter'
import Slider from '../../components/fragments/comonFragment/slider/Slider'
import classes from './MagazinePage.module.css'

import { articles } from '/data/articleData'

const MagazinePage = () => {
  return (
    <>
      <Slider
        type={'magazine'}
        image="/assets/img/magazine.png"
        title="Discover pakty’s magazine"
        content="If you're searching for the newest trends or modest ideas for 3D Furniture: we've got you the best."
        linkTo=""
        buttonLabel=""
      />
      <div className={classes.container}>
        <Filter
          title="Categories"
          buttons={[
            { label: 'All types', action: 'all' },
            { label: 'styles & brands', action: 'styles_brand' },
            { label: 'Decor ideas', action: 'decor' },
            { label: 'Tipes & guides', action: 'types_guides' },
          ]}
        />
        <div className={classes.articles}>
          {articles.map((article, index) => (
            <CardArticle key={index} article={article} />
          ))}
        </div>
      </div>
    </>
  )
}

export default MagazinePage
