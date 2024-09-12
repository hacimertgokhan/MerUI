import Navigation from "@/ui/Navigation";
import IconLink from "@/ui/IconLink";
import {FiActivity, FiBook, FiGithub, FiHome} from "react-icons/fi";

export default function NavigationExample() {

    const NavigationLeft = () => {
        return (
            <div className={"font-sans flex flex-row text-indigo-300 font-bold text-3xl"}>
                <h1>MerUI</h1>
                <sup className={"text-sm font-thin -ml-2"}>0.0.3</sup>
            </div>
        )
    }

    const NavigationRight = () => {

        const IconLinks = [
            {
                item: (
                    <IconLink icon={{
                        badge: <FiHome/>,
                        style: {},
                        className: {},
                    }} link={"/"} text={{
                        text: null,
                        style: {},
                        className: {},
                    }}/>
                )
            },
            {
                item: (
                    <IconLink icon={{
                        badge: <FiGithub/>,
                        style: {},
                        className: {},
                    }} link={"https://github.com/hacimertgokhan/"} text={{
                        text: null,
                        style: {},
                        className: {},
                    }}/>
                )
            },
            {
                item: (
                    <IconLink icon={{
                        badge: <FiActivity/>,
                        style: {},
                        className: {},
                    }} link={"https://discord.gg/kWGsbZpnQM"} text={{
                        text: null,
                        style: {},
                        className: {},
                    }}/>
                )
            },
        ]

        return (
            <div className={"font-sans gap-6 flex flex-row text-indigo-300"}>
                {
                    IconLinks.map((a,b) => {
                        return <div key={b}>{a.item}</div>;
                    })
                }
            </div>
        )
    }

    const NavigationCenter = () => {
        return (
            <div className={"font-sans flex flex-row font-medium gap-2 text-indigo-300 "}>
                <IconLink icon={{
                    badge: <FiBook/>,
                    style: {},
                    className: {},
                }} link={"https://github.com/hacimertgokhan/merui"} text={{
                    text: 'Documents',
                    style: {},
                    className: {},
                }}/>
            </div>
        )
    }

    return (
        <main className={"items-center flex flex-col w-screen h-screen"}>
            <Navigation left={<NavigationLeft/>} center={<NavigationCenter/>} right={<NavigationRight/>}/>
        </main>
    );
}
