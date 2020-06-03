<template>
  <div id="projects">
    <div id="table">
      <h1 id="header">
        notable projects
        <p style="text-align: right; font-size: 12px; ">
          (head over to my github page for sources)
        </p>
      </h1>
      <b-table
        table-variant="dark"
        bordered
        :fields="fields"
        head-variant="light"
        id="tb"
        hover
        :items="items"
        style="color: white; background-color: rgb(56, 59, 66); "
        data-aos="fade-right"
      >
      </b-table>
      <div id="bucket-list">
        <h5 id="future">future endeavors (2020)</h5>
        <h5 id="bucket" data-aos="fade-right">
          Around my freshman year of college, my main goal was to learn game
          developement. At the time I never really knew the world of UI/UX
          design, automation, or data science. 3 years later... in my final
          year, with a variety of new gained knowledge, I've decided to create
          bucket list of projects to do before my college days end.
        </h5>
        <section id="list" aria-labelledby="todos-label" data-aos="fade-right">
          <ul>
            <!--crossed out bullet point--->
            <li style="text-decoration:line-through;">
              Create a personal portfolio website.
            </li>
            <li>
              Automate "Fill out online forms" with Python.
            </li>
            <li>
              Create an Interactive Data Visualizations of crime in SC.
            </li>
            <li>
              Create a document scraper.
            </li>
            <li>
              Teach myself Machine Learning/AI.
            </li>
            <li>
              Custom build a mechanical keyboard.
            </li>
          </ul>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fields: ["Title", "Description", "Skills"],
      items: [
        {
          Title: "de-stressfi",
          Description:
            "Website that relieves your stress with smooth lofi added onto a weather application along with other tools.",
          Skills: "Node.JS, JS, HTML, CSS"
        },
        {
          Title: "personal portfolio (forever in progress)",
          Description:
            "A portfolio created with UI/UX in mind to showcase my skills.",
          Skills: "Vue, Bootstrap, JS, HTML, CSS"
        },
        {
          Title: "library system",
          Description:
            "An in-class team project to build a basic library system framework. eg. checking out/returning books, library members, book titles/author stored in JSON file.",
          Skills: "Java, JSON"
        },
        {
          Title: "...",
          Description: "...",
          Skills: "..."
        }
      ]
    };
  }
};
</script>
<style lang="scss">
#future {
  height: auto;
  margin: auto;
  text-align: left;
  width: 69%;
  font-size: 25px;
  border-bottom: 1px solid;
  margin-top: 110px;
  position: relative;
  margin-bottom: 30px;
}

#list {
  position: relative;
  list-style-position: inside;
  width: 59%;
  text-align: left;
  height: auto;
  margin: auto;
  margin-bottom: 100px;
}

#bucket {
  height: auto;
  margin: auto;
  text-align: left;
  width: 55%;
  font-size: 20px;

  margin-bottom: 70px;

  position: relative;
}

#table {
  width: 100vw;
  height: auto;
}

#header {
  margin: auto;
  text-align: left;
  margin-top: 100px;
  width: 70vw;
  margin-bottom: 50px;
}

#tb {
  margin: auto;
  width: auto;
}

#projects {
  height: auto;
  width: 100vw;
  margin-top: 280px;
}
</style>
