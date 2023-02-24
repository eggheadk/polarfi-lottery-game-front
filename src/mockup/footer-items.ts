import useStore from "../useStore";

const _FOOTERITEMS = (): FooterItemType[] => {
    const { T } = useStore();
    return [
        {
            topic: T("footer.about"),
            items: [
                { label: T("footer.about.contact"), link: "/" },
                { label: T("footer.about.brand"), link: "/" },
                { label: T("footer.about.blog"), link: "/" },
                { label: T("footer.about.community"), link: "/" },
                { label: T("footer.about.litepaper"), link: "/" }
            ]
        },
        {
            topic: T("footer.help"),
            items: [
                { label: T("footer.help.support"), link: "/" },
                { label: T("footer.help.troble"), link: "/" },
                { label: T("footer.help.guides"), link: "/" }
            ]
        },
        {
            topic: T("footer.developers"),
            items: [
                { label: T("footer.developers.github"), link: "/" },
                { label: T("footer.developers.documentation"), link: "/" },
                { label: T("footer.developers.documentation"), link: "/" },
                { label: T("footer.developers.aduits"), link: "/" },
                { label: T("footer.developers.career"), link: "/" }
            ]
        }
    ]
}

export default _FOOTERITEMS;
