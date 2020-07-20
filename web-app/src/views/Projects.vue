<template>
  <div id="projects" style="border-top:1px transparent solid;">
    <div id="table">
      <h1 id="header">
        notable projects
      </h1>
      <div class="projects-info" data-aos="fade-right">
        <h2>Covid-19 Unload</h2>
        <p>
          An application to showing updates of covid-19 cases world-wide, but
          more specifically within the USA.
        </p>
        <p>
          <span style="color:rgb(238, 252, 177);"
            >Languguages and technologies used</span
          >: Vue.js, Express.js, HTML, CSS, JS
        </p>

        <div class="github-b">
          <a
            id="hover_on_git"
            href="https://github.com/nvnguyen-ki/Covid_19_app"
            target="_blank"
          >
            <div>
              check on github
              <img src="../assets/github.svg" width="22" alt="Github" />
            </div>
          </a>
        </div>
      </div>
      <div class="projects-info" data-aos="fade-right">
        <h2>personal portfolio (forever-in-progress)</h2>
        <p>A portfolio created with UI/UX in mind to showcase my skills.</p>
        <p>
          <span style="color:rgb(238, 252, 177);"
            >Languguages and technologies used</span
          >: Vue, Bootstrap, JS, HTML, CSS
        </p>

        <div class="github-b">
          <a
            id="hover_on_git"
            href="https://github.com/nvnguyen-ki/nvnguyen-ki.github.io"
            target="_blank"
          >
            <div>
              check on github
              <img src="../assets/github.svg" width="22" alt="Github" />
            </div>
          </a>
        </div>
      </div>
      <div class="projects-info" data-aos="fade-right">
        <h2>de-stressfi</h2>
        <p>
          Website that relieves your stress with smooth lofi added onto a
          weather application along with other tools.
        </p>
        <p>
          <span style="color:rgb(238, 252, 177);"
            >Languguages and technologies used</span
          >: Node.JS, JS, HTML, CSS.
        </p>

        <div class="github-b">
          <a
            id="hover_on_git"
            href="https://github.com/nvnguyen-ki/de-stressfi"
            target="_blank"
          >
            <div>
              check on github
              <img src="../assets/github.svg" width="22" alt="Github" />
            </div>
          </a>
        </div>
      </div>
      <div class="projects-info" data-aos="fade-right">
        <h2>library system</h2>
        <p>
          A group project given by my professor aiming to build a basic library
          system framework in the eclipse console while practicing object
          oriented programming.
        </p>
        <p>
          <span style="color:rgb(238, 252, 177);"
            >Languguages and technologies used</span
          >: Java, JSON. (This was done on my school github account)
        </p>

        <div class="github-b">
          <a
            id="hover_on_git"
            href="https://github.com/WenLag/book-searcher"
            target="_blank"
          >
            <div>
              check on github
              <img src="../assets/github.svg" width="22" alt="Github" />
            </div>
          </a>
        </div>
      </div>
      <!-- <b-table
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
      </b-table> -->
      <div id="bucket-list">
        <h5 id="future">future endeavors (2020)</h5>
        <h5 id="bucket" data-aos="fade-right">
          Around my freshman year of college, my main goal was to learn game
          developement. At the time I never really knew the world of web
          developement, automation, or data science. 3 years later... in my
          final year, with a variety of new gained knowledge, I've decided to
          create bucket list of projects to do before my college days end.
        </h5>
        <section id="list" aria-labelledby="todos-label" data-aos="fade-right">
          <ul>
            <!--crossed out bullet point--->
            <li style="text-decoration:line-through;">
              Create a personal portfolio website.
            </li>
            <li style="text-decoration:line-through;">
              Create a website using both Node.js and Vue. (covid-19 app)
            </li>
            <li>
              Design and build a website that includes a MYSQL database.
            </li>
            <li>
              Automatically fill blanks with your information in an application.
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
// export default {
//   data() {
//     return {
//       fields: ["Title", "Description", "Skills"],
//       items: [
//         {
//           Title: "de-stressfi",
//           Description:
//             "Website that relieves your stress with smooth lofi added onto a weather application along with other tools.",
//           Skills: "Node.JS, JS, HTML, CSS"
//         },
//         {
//           Title: "@_Scraper (in-progress)",
//           Description:
//             "An application to scrape a pdf or a url website to find specific information such as emails or phone-numbers",
//           Skills: "Python"
//         },
//         {
//           Title: "personal portfolio (forever-in-progress)",
//           Description:
//             "A portfolio created with UI/UX in mind to showcase my skills.",
//           Skills: "Vue, Bootstrap, JS, HTML, CSS"
//         },
//         {
//           Title: "library system",
//           Description:
//             "An in-class team project to build a basic library system framework in the console. eg. checking out/returning books, library members, book titles/author stored in JSON file.",
//           Skills: "Java, JSON"
//         }
//       ]
//     };
//   }
// };
</script>
<style lang="scss">
#hover_on_git {
  color: aliceblue;
}

#hover_on_git:link {
  text-decoration: none;
}

.github-b {
  border: 1px solid #2f353a;
  border-radius: 5px;
  display: block;
  width: 185px;
  position: relative;
  text-align: center;
  left: 15%;
  color: aliceblue;
  border-color: aliceblue;
  margin-top: 15px;
}

.github-b:hover,
#hover_on_git:hover {
  background: rgb(197, 158, 158);
  color: rgb(252, 255, 240);
}

.projects-info {
  font-size: 18px;
  margin: auto;
  text-align: left;
  position: relative;
  height: auto;
  width: 60%;
  right: 14%;
  margin-bottom: 100px;
  h2 {
    margin: auto;
    position: relative;
    left: 15%;
    margin-bottom: 15px;
  }
  p {
    margin: auto;
    position: relative;
    left: 15%;
    margin: auto;
  }
}

#future {
  height: auto;
  margin: auto;
  text-align: left;
  width: 69%;
  font-size: 35px;
  border-bottom: 1px solid;
  margin-top: 110px;
  position: relative;
  margin-bottom: 30px;
  border-color: white;
  color: rgb(125, 115, 184);
}

#list {
  position: relative;
  list-style-position: inside;
  width: 59%;
  text-align: left;
  height: auto;
  margin: auto;
  margin-bottom: 200px;
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

// #table {
//   width: 100vw;
//   height: auto;
// }

#header {
  margin: auto;
  text-align: left;
  margin-top: 100px;
  width: 70vw;
  margin-bottom: 50px;
  font-size: 35px;
  color: #8ac6f7;
  border-bottom: 1px solid white;
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
