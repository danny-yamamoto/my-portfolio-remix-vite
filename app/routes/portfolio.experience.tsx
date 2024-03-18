import { json } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import { getExperience } from "../experience.server";
import { Experience } from "~/types";

export async function loader() {
//export const loader = async () => {
    const experience = await getExperience()
    return json(experience)
} 

export default function PortfolioExperienceRoute() {
    const experience: Experience[] = useLoaderData()
    return (
        <ul>
        {experience && experience.map(({ id, company, position }) => (
            <li key={id} className="whitespace-nowrap overflow-ellipsis w-1/2">{id}: {position} @ {company}</li>
        ))}
        </ul>
    );
}
