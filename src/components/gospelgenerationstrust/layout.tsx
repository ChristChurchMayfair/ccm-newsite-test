/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"

import Head from "../head"
import { HeaderColour } from "../header"
import Footer from "../footer"
import CookieNotice from "../cookie-notice"
// import "../../assets/css/global.scss"
// import "../../assets/css/style.css"
import { OpenGraphMetaData } from "../open-graph"
import { RobotsMetaData } from "../robots"
import GospelGenerationsTrustHeader from "./header"

interface Props {
    children: React.ReactNode
    title: string | undefined
    description?: string | undefined
    openGraphData?: OpenGraphMetaData
    headerColour?: HeaderColour
    blurHeaderBackground?: boolean
    robotsMetaData?: RobotsMetaData
}
const GospelGenerationsTrustLayout: React.FC<Props> = ({
    headerColour,
    blurHeaderBackground,
    children,
    title,
    description,
    openGraphData,
    robotsMetaData,
}) => {
    return (
        <>
            <Head
                title={title}
                description={description}
                openGraphData={openGraphData}
                robotsMetaData={robotsMetaData}
            />
            <GospelGenerationsTrustHeader
                headerColour={headerColour}
                blurBackground={blurHeaderBackground}
            />
            <main>{children}</main>
            <CookieNotice />
        </>
    )
}

export default GospelGenerationsTrustLayout
