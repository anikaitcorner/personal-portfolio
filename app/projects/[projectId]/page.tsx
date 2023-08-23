export default function Project({params}:{params:{projectId:string}}){


    return (
        <main className="relative overflow-hidden pt-16 sm:pt-24 lg:pt-40 xl:pt-32">
            {params.projectId} Projects
        </main>
    )
}