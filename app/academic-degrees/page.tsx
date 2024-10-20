import Link from "next/link";
import { Card } from "../components/card";

interface CourseProps {
  id: number;
  name: string;
}

interface EducationalInstitutionProps {
  id: string;
  name: string;
  nameIt: string;
  studyPlace: string;
  location: string;
  locationIt: string;
}

interface QualificationProps {
  id: number;
  educationalInstitution: EducationalInstitutionProps;
  academicDegree: string;
  faculty: string;
  department: string;
  speciality: string;
  specialityIt: string;
  course: CourseProps;
  startedStudying: string;
  finishedStudying: string;
}

export default async function AcademicDegrees() {
  const apiUrl = process.env.API_URL;
  const customerId = process.env.CUSTOMER_ID;
  let data = await fetch(
    `${apiUrl}api/v1/customer/${customerId}/qualification/all`
  );

  let academicDegrees = (await data.json()) as QualificationProps[];

  return (
    <div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
      <nav className="flex flex-col items-center justify-center w-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black p-4 text-3xl">
        <Link
          href="/menu"
          className="text-lm duration-500 text-zinc-500 hover:text-zinc-300"
        >
          Academic degrees
        </Link>
      </nav>
      <div className="container flex items-center justify-center min-h-screen m-2 p-4 mx-auto">
        <div className="grid w-full grid-cols-1 gap-8 mx-auto sm:mt-0 sm:grid-cols-3 lg:gap-16">
          {academicDegrees.map(
            (aD) =>
              !aD.course && (
                <Card key={aD.id}>
                  <Link
                    href=""
                    target="_blank"
                    className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24  lg:pb-48  md:p-16"
                  >
                    <div className="z-10 flex flex-col">
                      <span className="lg:text-xl font-medium duration-150 xl:text-3xl text-zinc-200 group-hover:text-white text-center font-display">
                        {aD.academicDegree}
                      </span>
                      <span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
                        {aD.educationalInstitution.name}
                      </span>
                      <span className="mt-4 text-lg text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
                        {aD.speciality}
                      </span>
                      <span className="mt-4 text-sm text-right duration-1000 text-zinc-400 group-hover:text-zinc-200">
                        {aD.educationalInstitution.location}
                      </span>
                      <span className="mt-4 text-sm text-center duration-1000 text-yellow-100 group-hover:text-yellow-400">
                        {aD.startedStudying} - {aD.finishedStudying}
                      </span>
                    </div>
                  </Link>
                </Card>
              )
          )}
        </div>
      </div>
    </div>
  );
}
