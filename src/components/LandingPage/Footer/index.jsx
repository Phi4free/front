import styles from "../../../styles/style";
import logo from "../../../assets/logo.png";
import { useTranslation } from "react-i18next";
import { LangSwitcher } from "../../LangSwitcher";

export default function Footer() {

    const { t } = useTranslation();

    const footerLinks = [
        {
            title: t('usefulLinks'),
            links: [
                {
                    name: t('aboutUs'),
                    link: "https://phi4free.netlify.app/",
                },
                {
                    name: t('workUs'),
                    link: "https://phi4free.netlify.app/",
                },
                {
                    name: t('terms'),
                    link: "https://phi4free.netlify.app/",
                },
                {
                    name: t('privacy'),
                    link: "https://phi4free.netlify.app/",
                },
                {
                    name: t('support'),
                    link: "https://phi4free.netlify.app/",
                },
            ],
        },
        {
            title: t('courses'),
            links: [
                {
                    name: t('Financial'),
                    link: "https://phi4free.netlify.app/",
                },
                {
                    name: t('Philosophical'),
                    link: "https://phi4free.netlify.app/",
                },
                {
                    name: t('Physical'),
                    link: "https://phi4free.netlify.app/",
                },
                {
                    name: t('Functional'),
                    link: "https://phi4free.netlify.app/",
                },
            ],
        },
        {
            title: t('contact'),
            links: [
                {
                    name: "E-mail",
                    link: "https://phi4free.netlify.app/",
                },
                {
                    name: "FAQ",
                    link: "https://phi4free.netlify.app/",
                },
            ],
        },
    ];

    return (
        <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
            <div
                className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}
            >
                <div className="flex-[1] flex flex-col justify-start mr-10">
                    <img
                        src={logo}
                        alt="hoobank"
                        className="w-[266px] h-[72.14px] object-contain"
                    />
                    <p className={`${styles.paragraph} mt-4 max-w-[312px]`}>
                        {t('footerPar')}
                    </p>
                    <br />
                    <LangSwitcher/>
                </div>

                <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
                    {footerLinks.map((footerlink) => (
                        <div
                            key={footerlink.title}
                            className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}
                        >
                            <h4 className="font-medium text-[18px] leading-[27px] text-white">
                                {footerlink.title}
                            </h4>
                            <ul className="list-none mt-4">
                                {footerlink.links.map((link, index) => (
                                    <li
                                        key={link.name}
                                        className={`font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
                                            index !==
                                            footerlink.links.length - 1
                                                ? "mb-4"
                                                : "mb-0"
                                        }`}
                                    >
                                        {link.name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
                <p className="font-normal text-center text-[18px] leading-[27px] text-white">
                    Copyright Ⓒ 2023 Phi4free. All Rights Reserved.
                </p>
            </div>
        </section>
    );
}
