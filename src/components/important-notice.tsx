import React, { FC } from "react"
import { Link } from "gatsby"

import styles from "./important-notice.module.scss"
import Section from "./section"
import SectionText from "./section-text"

export interface Feature {
    title: string
    description: string
    buttonText: string
    buttonHref: string
    isLinkExternal: boolean
}

interface ImportantNoticeProps {
    title: string
    lastUpdated?: string
    features?: Feature[]
}

const ImportantNotice: FC<ImportantNoticeProps> = ({
    children,
    title: noticeTitle,
    lastUpdated,
    features = [],
}) => (
    <div className={styles.importantNoticeContainer}>
        <Section
            className={styles.importantNotice}
            fullBleed
            colorScheme="light"
        >
            <div className={styles.content}>
                <h1 className={styles.title}>{noticeTitle}</h1>
                <SectionText fullBleed className={styles.text}>
                    {children}
                    {lastUpdated !== undefined && (
                        <p
                            className={styles.lastUpdated}
                        >{`This was last updated at ${lastUpdated}.`}</p>
                    )}
                </SectionText>
                {features.length > 0 && (
                    <>
                        <hr className={styles.separator} />
                        <div className={styles.featuresContainer}>
                            {features.map(
                                (
                                    {
                                        title,
                                        description,
                                        buttonText,
                                        buttonHref,
                                        isLinkExternal,
                                    },
                                    i
                                ) => (
                                    <div key={`${i}${title}${description}`}>
                                        <h2>{title}</h2>
                                        <div>
                                            <p>{description}</p>
                                        </div>
                                        {isLinkExternal ? (
                                            <a
                                                className={
                                                    styles.featureLinkButton
                                                }
                                                href={buttonHref}
                                            >
                                                {buttonText}
                                            </a>
                                        ) : (
                                            <Link
                                                className="button"
                                                to={buttonHref}
                                            >
                                                {buttonText}
                                            </Link>
                                        )}
                                    </div>
                                )
                            )}
                        </div>
                    </>
                )}
            </div>
        </Section>
    </div>
)

export default ImportantNotice
