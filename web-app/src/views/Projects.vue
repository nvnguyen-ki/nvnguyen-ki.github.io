<template>
  <div id="projects">
    <div id="table" style="margin-top:120px;">
      <h1
        style="margin-top:80px; text-align: left; margin-bottom: 40px; "
        data-aos="fade-right"
      >
        notable projects
      </h1>
      <b-table
        table-variant="dark"
        bordered
        head-variant="light"
        hover
        :items="items"
        style="color: white; background-color: rgb(56, 59, 66); margin:auto;"
        data-aos="fade-right"
      ></b-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          Title: "De-Stressfi",
          Description:
            "Website that relieves your stress with smooth lofi added onto a weather application along with other tools",
          Skills: "Node, JS, HTML, CSS"
        },
        {
          Title: "Personal Portfolio",
          Description:
            "A portfolio created with UI/UX in mind to showcase my skills",
          Skills: "Vue, Bootstrap, JS, HTML, CSS"
        },
        {
          Title: "Library System",
          Description:
            "An in-class team project to build a basic library system framework. eg. checking out/returning books, library members, book titles/author stored in JSON file",
          Skills: "Java, JSON"
        }
      ]
    };
  }
};
</script>
<style lang="scss">
#table {
  color: white;
  width: 90vw;
  margin: auto;
  margin-top: 40px;
}

#projects {
  border: 1px solid rgb(34, 41, 54);
  word-wrap: break-word;
  height: 110vh;
  width: 100vw;
}
</style>
