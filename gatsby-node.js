const { fmImagesToRelative } = require('gatsby-remark-relative-images')
const path = require('path')

exports.onCreateNode = ({ node }) => {
  fmImagesToRelative(node)
}
exports.onCreateWebpackConfig = ({ stage, actions }) => {
  switch (stage) {
    case 'build-html':
      actions.setWebpackConfig({
        plugins: [{ 'global.GENTLY': false }],
      })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const hotel = path.resolve(`src/templates/hotel.js`)
  const cvb = path.resolve(`src/templates/cvb.js`)
  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          {
            allHotelsJson {
              edges {
                node {
                  address
                  casino
                  city
                  closestairport
                  cvbmember
                  diamondamount
                  directorcatering
                  directorsales
                  distancetohotel
                  fitnesscenter
                  generalemail
                  hasdiamond
                  id
                  largestroom1
                  largestroom2
                  loyaltyprogramname
                  meetingrooms
                  name
                  parkingselffee
                  parkingvaletfee
                  pool
                  poolindoors
                  publicwififee
                  resort
                  resortfee
                  roomstax
                  salesemail
                  salestelephone
                  salestax
                  servicecharge
                  sleepingrooms
                  spa
                  state
                  telephone
                  twitter
                  website
                  wififee
                  zip
                }
              }
            }
            allCvbsJson {
              edges {
                node {
                  id
                  name
                  address
                  city
                  state
                  phone
                  hotelRoomInventory
                  conventionCenter
                  mainAirport1
                  mainAirport2
                  transportationCosts1
                  transportationCosts2
                  salesStaff {
                    name
                    title
                    email
                    phone
                  }
                  updates {
                    image
                    title
                    summary
                    body
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          reject(result.errors)
        }
        result.data.allCvbsJson.edges.forEach(({ node }) => {
          createPage({
            path: `/cvb/${node.id}`,
            component: cvb,
            context: {
              id: node.id,
              address: node.address,
              city: node.city,
              state: node.state,
              phone: node.phone,
              name: node.name,
              hotelRoomInventory: node.hotelRoomInventory,
              conventionCenter: node.conventionCenter,
              mainAirport1: node.mainAirport1,
              mainAirport2: node.mainAirport2,
              transportationCosts: node.transportationCosts,
              transportationCosts2: node.transportationCosts2,
            },
          })
        })
        // Create blog posts pages.
        result.data.allHotelsJson.edges.forEach(({ node }) => {
          createPage({
            path: `/hotel/${node.id}`,
            component: hotel,
            context: {
              id: node.id,
              address: node.address,
              casino: node.casino,
              city: node.city,
              closestairport: node.closestairport,
              cvbmember: node.cvbmember,
              diamondamount: node.diamondamount,
              directorcatering: node.directorcatering,
              directorsales: node.directorsales,
              distancetohotel: node.distancetohotel,
              fitnesscenter: node.fitnesscenter,
              generalemail: node.generalemail,
              hasdiamond: node.hasdiamond,
              largestroom1: node.largestroom1,
              largestroom2: node.largestroom2,
              loyaltyprogramname: node.loyaltyprogramname,
              meetingrooms: node.meetingrooms,
              name: node.name,
              parkingselffee: node.parkingselffee,
              parkingvaletfee: node.parkingvaletfee,
              pool: node.pool,
              poolindoors: node.poolindoors,
              publicwififee: node.publicwififee,
              resort: node.resort,
              resortfee: node.resortfee,
              roomstax: node.roomstax,
              salesemail: node.salesemail,
              salestelephone: node.salestelephone,
              salestax: node.salestax,
              servicecharge: node.servicecharge,
              sleepingrooms: node.sleepingrooms,
              spa: node.spa,
              state: node.state,
              telephone: node.telephone,
              twitter: node.twitter,
              website: node.wififee,
              wififee: node.website,
              zip: node.zip,
            },
          })
        })
      })
    )
  })
}
