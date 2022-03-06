import './PageBoard.css';
import { useEffect } from "react";

import myApi from "../../../../../Url/Url";

function PageBoard() {
    useEffect(() => {
        getTasksByIdProject("blabla")
    }, []); 

    const getTasksByIdProject =async (idProject:string) => {
        try {
            const result = await Promise.all([
                myApi.get(`/project/fetchProjectDetails/6220a25b4051ee90bc98bad6`), 
                myApi.get(`task/fetchTaskDetailsByIdProject/6220a25b4051ee90bc98bad6`)
            ]);

            //   const resultProject = await myApi.get(`/project/fetchProjectDetails/${idProject}`);
            //   const result = await myApi.get(`/profile/user/${idProject}`);
            const resultProject=result[0].data.labels;
            const resultTasks=result[1].data;
            console.log(resultProject);
            console.log(resultTasks);

        } catch (e) {
         console.log(e);
        }
      };
  return (
      <div>
        <h2>Board</h2>
      </div>
  );
};

export default PageBoard;