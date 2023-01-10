const Items = [{
    nav: "Your signature",
    svg: "/svgs/signature.svg"
},
{
    nav: 'Quick Actions',
    svg: '/svgs/clock.svg',
    more: [
        {
            nav: 'Drafts',
            link: '/'
        },
        {
            nav: 'Waiting for me'
        },
        {
            nav: 'Waiting for others'
        },
        {
            nav: 'Completed'
        }]
}, {
    nav: "Documents",
    svg: "/svgs/folder.svg",
    existingNumber: 0
}, {
    nav: "Templates",
    svg: "/svgs/bullets.svg",
    existingNumber: 0
}, {
    nav: "Contacts",
    svg: "/svgs/contacts.svg",
    existingNumber: 0
},]

export const FooterItems = [
    {
        nav: "Settings",
        svg: "/svgs/settings.svg",
    },
    {
        nav: "Help and support",
        svg: "/svgs/help-square.svg",
    }]


export default Items