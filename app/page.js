import Card from "@/ui/Card";
import AvatarCard from "@/ui/AvatarCard";
import avatar from '../images/avatar.png';
import CardBody from "@/ui/CardBody";
import CardHeader from "@/ui/CardHeader";
import UnderlinedText from "@/ui/UnderlinedText";
import IconPackage from "@/ui/IconPackage";
import IconItem from "@/ui/IconItem";
import {CiHome} from "react-icons/ci";

export default function Home() {
  return (
    <main className={"items-center justify-center flex w-screen h-screen"}>
        <Card className={"grid grid-rows-1 gap-5 grid-cols-1"}>
            <CardHeader>
                <UnderlinedText className={"text-2xl mb-3 font-bold"} text={"MerUI"}/>
                <IconPackage className={"grid-cols-5 items-center justify-center grid"}>
                    <IconItem icon={<CiHome/>}/>
                    <IconItem icon={<CiHome/>}/>
                    <IconItem icon={<CiHome/>}/>
                    <IconItem icon={<CiHome/>}/>
                    <IconItem icon={<CiHome/>} isLast={true}/>
                </IconPackage>
            </CardHeader>
            <CardBody className={"flex flex-col gap-5"}>
                <AvatarCard image={avatar} alt={"My logo"} title={"H. Mert Gökhan"} subtitle={"A Software Developer"}/>
                <AvatarCard image={avatar} alt={"My logo"} title={"H. Mert Gökhan"} subtitle={"A Software Developer"}/>
            </CardBody>
        </Card>
    </main>
  );
}
