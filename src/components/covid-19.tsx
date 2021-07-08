import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import ImportantNotice, { Feature } from "./important-notice"

const Covid19 = () => {
    const { covid } = useStaticQuery<GatsbyTypes.CovidNoticeQuery>(graphql`
        query CovidNotice {
            covid: markdownRemark(
                fileAbsolutePath: { regex: "/_events/coronavirus2020.md$/" }
            ) {
                frontmatter {
                    name
                    lastUpdated
                    features {
                        title
                        description
                        buttonText
                        buttonHref
                        isLinkExternal
                    }
                }
                html
            }
        }
    `)

    const features = covid!.frontmatter!.features!
    return (
        <ImportantNotice
            title={covid!.frontmatter!.name!}
            lastUpdated={covid!.frontmatter!.lastUpdated}
            features={features as Feature[]}
        >
            <div dangerouslySetInnerHTML={{ __html: covid!.html! }} />
        </ImportantNotice>
    )
}

export default Covid19
