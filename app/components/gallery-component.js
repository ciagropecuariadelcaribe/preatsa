import Component from '@ember/component';

export default Component.extend({
  init() {
    this._super(...arguments);
    this.pics = [
      {n:1, title: "CAMION JACK", url:"https://firebasestorage.googleapis.com/v0/b/capitalprojects18.appspot.com/o/maquinas%2FPicture1.png?alt=media&token=4121733d-6a4a-46d0-90c5-6a353175ed8b" },
      {n:2, title: "CAMION JACK", url:"https://firebasestorage.googleapis.com/v0/b/capitalprojects18.appspot.com/o/maquinas%2FPicture2.png?alt=media&token=6e5970f8-66fd-4d26-9652-fea204155225" },
      {n:3, title: "KODIAK", url:"https://firebasestorage.googleapis.com/v0/b/capitalprojects18.appspot.com/o/maquinas%2FPicture3.png?alt=media&token=86fe675e-961b-4edb-9f63-f13b7cdade70" },
      {n:4, title: "MULA ACTROS", url:"https://firebasestorage.googleapis.com/v0/b/capitalprojects18.appspot.com/o/maquinas%2FPicture4.png?alt=media&token=5626475a-5fe5-43e8-a9de-bbe391e5cffd" },
      {n:5, title: "MULA ACTROS", url:"https://firebasestorage.googleapis.com/v0/b/capitalprojects18.appspot.com/o/maquinas%2FPicture5.png?alt=media&token=05f10c56-4a39-475a-b7b3-4b83eda514f3" },
      {n:6, title: "MULA ACTROS", url:"https://firebasestorage.googleapis.com/v0/b/capitalprojects18.appspot.com/o/maquinas%2FPicture6.png?alt=media&token=353792f7-9e7d-4aa2-8ded-a2ebadd95f8e" },
      {n:7, title: "HITACHI 210", url:"https://firebasestorage.googleapis.com/v0/b/capitalprojects18.appspot.com/o/maquinas%2FPicture7.png?alt=media&token=e3867d8e-3b3f-411d-9379-52e663cfd74c" },
      {n:8, title: "HITACHI 210", url:"https://firebasestorage.googleapis.com/v0/b/capitalprojects18.appspot.com/o/maquinas%2FPicture8.png?alt=media&token=ab251b8f-1a53-44e6-a393-f326c08e6302" },
      {n:9, title: "HITACHI 210", url:"https://firebasestorage.googleapis.com/v0/b/capitalprojects18.appspot.com/o/maquinas%2FPicture9.png?alt=media&token=218a1552-2526-4578-b70c-f2e45f6917e8" },
      {n:10, title: "HITACHI 330", url:"https://firebasestorage.googleapis.com/v0/b/capitalprojects18.appspot.com/o/maquinas%2FPicture10.png?alt=media&token=ee02270b-88ee-4d28-9b77-a29af3153332" },
      {n:11, title: "HITACHI 330", url:"https://firebasestorage.googleapis.com/v0/b/capitalprojects18.appspot.com/o/maquinas%2FPicture11.png?alt=media&token=5e3237a5-9a46-4fd9-9cb9-557903b29c79" },
      {n:12, title: "HITACHI 330", url:"https://firebasestorage.googleapis.com/v0/b/capitalprojects18.appspot.com/o/maquinas%2FPicture12.png?alt=media&token=d071978c-32fa-4767-a3c1-8a73997d120c" },
      {n:13, title: "CETERPILLAR 325", url:"https://firebasestorage.googleapis.com/v0/b/capitalprojects18.appspot.com/o/maquinas%2FPicture13.png?alt=media&token=d8e5ad61-e885-40ca-9c5d-1bf8cd3eb7c5" },
      {n:14, title: "CETERPILLAR 325", url:"https://firebasestorage.googleapis.com/v0/b/capitalprojects18.appspot.com/o/maquinas%2FPicture14.png?alt=media&token=a6c730a5-5d94-4494-adb5-5d4ad43475fb" },
      {n:15, title: "CETERPILLAR 325", url:"https://firebasestorage.googleapis.com/v0/b/capitalprojects18.appspot.com/o/maquinas%2FPicture15.png?alt=media&token=923edcc2-2060-4c17-9185-9686325555f7" },
      {n:16, title: "CETERPILLAR 325", url:"https://firebasestorage.googleapis.com/v0/b/capitalprojects18.appspot.com/o/maquinas%2FPicture16.png?alt=media&token=a0c56039-33fd-4d9b-b749-e15c0a20dab6" },
      {n:17, title: "GRUA DEMAG", url:"https://firebasestorage.googleapis.com/v0/b/capitalprojects18.appspot.com/o/maquinas%2FPicture17.png?alt=media&token=082f157d-edb9-476c-be27-e887dfad66ca" },
      {n:18, title: "GRUA DEMAG", url:"https://firebasestorage.googleapis.com/v0/b/capitalprojects18.appspot.com/o/maquinas%2FPicture18.png?alt=media&token=09af0b5d-7387-4f52-bc17-ba473bf6c077" },
      {n:19, title: "GRUA DEMAG", url:"https://firebasestorage.googleapis.com/v0/b/capitalprojects18.appspot.com/o/maquinas%2FPicture19.png?alt=media&token=67a501af-1aa2-482e-9d3d-114757456edf" },
    ];
  },

  active: 1,
});
