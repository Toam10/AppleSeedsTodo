const projects=[
{
  name: "project1",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean rutrum odio vitae maximus venenatis. Nulla hendrerit malesuada tincidunt. Aenean ornare cursus posuere. Donec et elit justo. Sed nec felis vel nibh vestibulum interdum. Sed varius ex purus, congue volutpat erat commodo vel. Curabitur nibh nisl, feugiat tempus nisi sit amet, semper",
  goal: "Lorem ipsum dolor sit amet, consectetur",
  status: true,
  tasks:
  [
    {
      taskName:"Lorem ipsum", timestamps:new Date(), urgency:0, procedure:2, 
      comments:
      [
        {
          comment:"Lorem ipsum dolor sit amet", timestamps:new Date()
        },
        {
          comment:"Lorem ipsum dolor sit amet", timestamps:new Date()
        },
      ]
    },
    {
      taskName:"Lorem ipsum", timestamps:new Date(), urgency:2, procedure:0, 
      comments:
      [
        {
          comment:"Lorem ipsum dolor sit amet", timestamps:new Date()
        },
        {
          comment:"Lorem ipsum dolor sit amet", timestamps:new Date()
        },
      ]
    }
  ],
  timestamps: new Date() 
},
{
  name: "project2",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean rutrum odio vitae maximus venenatis. Nulla hendrerit malesuada tincidunt. Aenean ornare cursus posuere. Donec et elit justo. Sed nec felis vel nibh vestibulum interdum. Sed varius ex purus, congue volutpat erat commodo vel. Curabitur nibh nisl, feugiat tempus nisi sit amet, semper",
  goal: "Lorem ipsum dolor sit amet, consectetur",
  status: true,
  tasks:
  [
    {
      taskName:"Lorem ipsum", timestamps:new Date(), urgency:0, procedure:2, 
      comments:
      [
        {
          comment:"Lorem ipsum dolor sit amet", timestamps:new Date()
        },
        {
          comment:"Lorem ipsum dolor sit amet", timestamps:new Date()
        },
      ]
    },
    {
      taskName:"Lorem ipsum", timestamps:new Date(), urgency:2, procedure:0, 
      comments:
      [
        {
          comment:"Lorem ipsum dolor sit amet", timestamps:new Date()
        },
        {
          comment:"Lorem ipsum dolor sit amet", timestamps:new Date()
        },
      ]
    }
  ],
  timestamps: new Date() 
}
]

export {projects}