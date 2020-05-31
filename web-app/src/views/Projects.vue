<template>
  <div id="projects" style="margin-top:180px;">
    <div id="table">
      <h1 id="header" data-aos="fade-right">
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
          Skills: "Node, JS, HTML, CSS"
        },
        {
          Title: "personal portfolio",
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
#table {
  width: 100vw;
  height: 100vh;
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
  overflow: scroll;
  height: auto;
  width: 100vw;
}
</style>
