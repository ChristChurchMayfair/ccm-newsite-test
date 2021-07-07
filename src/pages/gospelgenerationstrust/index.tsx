import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styles from "./gospelgenerationstrust.module.scss"
import GospelGenerationsTrustLayout from "../../components/gospelgenerationstrust/layout"
import HeaderUnderlay from "../../components/header-underlay"
import Section from "../../components/section"
import Alum from "../../components/gospelgenerationstrust/alum"
import Hero from "../../components/hero"
import Img from "../../components/img"

const GospelGenerationsTrustPageQuery = graphql`
    query GospelGenerationsTrustPage {
        introduction: markdownRemark(
            fileAbsolutePath: {
                regex: "/gospelgenerationstrust/introduction.md$/"
            }
        ) {
            frontmatter {
                image {
                    childImageSharp {
                        fluid(maxWidth: 1000) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
            html
        }
        howcanyouhelp: markdownRemark(
            fileAbsolutePath: {
                regex: "/gospelgenerationstrust/howcanyouhelp.md$/"
            }
        ) {
            html
        }
        alums: allMarkdownRemark(
            filter: {
                fileAbsolutePath: {
                    regex: "/gospelgenerationstrust/alums/.*.md$/"
                }
            }
        ) {
            nodes {
                id
                frontmatter {
                    name
                    years
                    role
                    image {
                        childImageSharp {
                            fluid(maxWidth: 900) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                }
                html
            }
        }
    }
`

const AboutUs: React.FC<{}> = () => {
    const data = useStaticQuery<GatsbyTypes.GospelGenerationsTrustPageQuery>(
        GospelGenerationsTrustPageQuery
    )
    const alums = data.alums.nodes
    console.log(alums)
    return (
        <GospelGenerationsTrustLayout title="About us" headerColour="dark">
            <HeaderUnderlay colorScheme="light" />
            <Hero sectionId={"asdf"}>
                <Img
                    style={{
                        position: "absolute",
                        top: -100,
                        left: 0,
                        bottom: 0,
                        right: 0,
                    }}
                    loading="eager"
                    fadeIn={false}
                    fluid={
                        data.introduction!.frontmatter!.image!.childImageSharp!
                            .fluid
                    }
                    objectFit="cover"
                    objectPosition="center top"
                />
            </Hero>
            <Section colorScheme={"light"}>
                <div
                    className={styles.introduction}
                    dangerouslySetInnerHTML={{
                        __html: data.introduction!.html!,
                    }}
                />
            </Section>
            <Section colorScheme="light">
                <div className={styles.pullquote}>
                    Over 20 years we have trained over 75 men and women in
                    faithful gospel ministry.
                </div>
            </Section>
            <Section colorScheme="light">
                <div className={styles.alums}>
                    {alums.map((alum: any) => (
                        <Alum
                            key={alum.frontmatter!.name!}
                            name={alum.frontmatter!.name!}
                            years={alum.frontmatter!.years!}
                            role={alum.frontmatter!.role!}
                            html={alum.html!}
                            image={
                                alum.frontmatter!.image!.childImageSharp!.fluid!
                            }
                        ></Alum>
                    ))}
                </div>
            </Section>
            <Section colorScheme={"light"}>
                <div
                    className={styles.introduction}
                    dangerouslySetInnerHTML={{
                        __html: data.howcanyouhelp!.html!,
                    }}
                />
            </Section>
        </GospelGenerationsTrustLayout>
    )
}

export default AboutUs
