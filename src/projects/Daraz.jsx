import React from 'react'
import "./Daraz.css"


let DarazData=
[
    {
    Darazpick:"https://img.drz.lazcdn.com/static/pk/p/96c8e39603827a931bb31de6e09004dc.jpg_400x400q80.jpg_.avif",
    Daraztitle:"GLUPATONE Extreme Strong Whitening Emulsion Ultra Plus GS-120 For Face & Body 50ml",
    Darazprice:"Rs.900 ",
    Darazpercentage:"-70%"
},
    {
    Darazpick:"https://img.drz.lazcdn.com/static/pk/p/4a5e9f50079b92f4c0934e9efb7eae12.jpg_400x400q80.jpg_.avif",
    Daraztitle:"Palmolive Naturals Bar Soap Saver Pack 130gx3",
    Darazprice:"Rs.398 ",
    Darazpercentage:"Rs419-5%"
},
    {
    Darazpick:"https://img.drz.lazcdn.com/static/pk/p/f7016183af1d76c0d84fcbdbc6cda9f8.jpg_400x400q80.jpg_.avif",
    Daraztitle:"Palmolive Naturals Healthy & Smooth Shampoo 680ml",
    Darazprice:"Rs.969 ",
    Darazpercentage:"Rs1360 -16%"
},
    {
    Darazpick:"https://img.drz.lazcdn.com/static/pk/p/a8b4e3a602bfce394e0959e1df54eca0.png_400x400q80.png_.avif",
    Daraztitle:"Supreme Tea 430g",
    Darazprice:"Rs.699",
    Darazpercentage:"Rs890-18%"
},
    {
    Darazpick:"https://img.drz.lazcdn.com/static/pk/p/4744e231fb4fef71b4e4a3c069a93da1.jpg_400x400q80.jpg_.avif",
    Daraztitle:"AirPods Pro 6 Hi-Fi Wireless Airbuds 5.0 Bluetooth Earphone Slim small size with Charging Case White",
    Darazprice:"Rs.302",
    Darazpercentage:"Rs999-70%"
},
    {
    Darazpick:"https://img.drz.lazcdn.com/static/pk/p/605d5159c3e959ce4f5e34b15343863b.jpg_400x400q80.jpg_.avif",
    Daraztitle:"Handbag for girls Bags for girls Leather Bag for women Cat Handle Shoulder bags for ladies - casual handbag - Phone pouch - Crossbody & Shoulder bag for gift - Purse for girls",
    Darazprice:"Rs.597",
    Darazpercentage:"Rs639-7%"
},
]
let Darazcatagories=[
     {
    Darazpick:"https://img.drz.lazcdn.com/static/pk/p/e29d8af95232e6e7640c927877d7338b.jpg_170x170q80.jpg_.avif",
    Daraztitle:"Mounts",
    
},
     {
    Darazpick:"https://img.drz.lazcdn.com/static/pk/p/abb3c6e1690306d2fddfd29974ff5102.jpg_170x170q80.jpg_.avif",
    Daraztitle:"3D printer",
    
},
     {
    Darazpick:"https://img.drz.lazcdn.com/static/pk/p/56e28d4d27ce46df42bc48dd668957ef.jpg_170x170q80.jpg_.avif",
    Daraztitle:"SIM Tools",
    
},
     {
    Darazpick:"https://img.drz.lazcdn.com/static/pk/p/875eeb376690c78a2d2528cab875d9ec.jpg_170x170q80.jpg_.avif",
    Daraztitle:"Sweaters",
    
},
     {
    Darazpick:"https://img.drz.lazcdn.com/static/pk/p/e29d8af95232e6e7640c927877d7338b.jpg_170x170q80.jpg_.avif",
    Daraztitle:"Mounts",
    
},
     {
    Darazpick:"https://img.drz.lazcdn.com/g/kf/S55f1f5fed9bf435c80a8d87a736ab9ddS.jpg_170x170q80.jpg_.avif",
    Daraztitle:"Drawing",
    
},
     {
    Darazpick:"https://img.drz.lazcdn.com/g/kf/S3a332439ef0e4fe58c8ea78395315ddfp.jpg_170x170q80.jpg_.avif",
    Daraztitle:"ReadyMeals",
    
},
     {
    Darazpick:"https://img.drz.lazcdn.com/static/pk/p/9fa04367eea57645abd27b4bb6b667bd.jpg_170x170q80.jpg_.avif",
    Daraztitle:"Screenprotector",
    
},
     {
    Darazpick:"https://img.drz.lazcdn.com/static/pk/p/2e9adf0652c4d0bde06bf3bea8150026.jpg_170x170q80.jpg_.avif",
    Daraztitle:"Caserole pots",
    
},
     {
    Darazpick:"https://img.drz.lazcdn.com/static/pk/p/d2f9902d733f47e14a6d9d6c4be974ea.jpg_170x170q80.jpg_.avif",
    Daraztitle:"Dog Electric Clippers",
    
},
     {
    Darazpick:"https://img.drz.lazcdn.com/g/kf/S9ff7b6bc8b6f41a6b22020c69076d442n.jpg_170x170q80.jpg_.avif",
    Daraztitle:"Red Runners",
    
},
     {
    Darazpick:"https://img.drz.lazcdn.com/static/pk/p/d71997f413d87bc6dccf1d7be1b007fc.jpg_170x170q80.jpg_.avif",
    Daraztitle:"Dining Seats",
    
},
     {
    Darazpick:"https://img.drz.lazcdn.com/static/pk/p/50e57638451107277c9ab852768e5c1b.jpg_170x170q80.jpg_.avif",
    Daraztitle:"Leashes",
    
},
     {
    Darazpick:"https://img.drz.lazcdn.com/static/pk/p/mdc/721a637bdc9960e253cb1da8751e892c.png_170x170q80.png_.avif",
    Daraztitle:"Done to Educate",
    
},
     {
    Darazpick:"https://img.drz.lazcdn.com/static/pk/p/d25fcf1b1be333760cdf80e4b6971b8b.jpg_170x170q80.jpg_.avif",
    Daraztitle:"Toy Boxes",
    
},

]
let Yourdaraz=[
     {
    Darazpick:"https://img.drz.lazcdn.com/static/pk/p/7bc41cba6a3a49973c3021772760c37b.png_400x400q80.png_.avif",
    Daraztitle:"Butterfly Breathables Maxi Thick Cottony Sanitary Pads Long Value Pack 18 Pcs",
    Darazprice:"Rs.640 ",
},
     {
    Darazpick:"https://img.drz.lazcdn.com/static/pk/p/3c2a5c25af4c381c86b7e066ce3117bd.jpg_400x400q80.jpg_.avif",
    Daraztitle:"Flea Tick Comb For Dogs And Cats",
    Darazprice:"Rs.299 ",
},
     {
    Darazpick:"https://img.drz.lazcdn.com/static/pk/p/7dd08ff97e65e4c9616b95cc8346e750.jpg_400x400q80.jpg_.avif",
    Daraztitle:"TRACKSUIT - New Trendy Black & White Fire Printed Tracksuit For Men- T-shirt & Trouser Printed Tracksuit",
    Darazprice:"Rs.767",
},
     {
    Darazpick:"https://img.drz.lazcdn.com/static/pk/p/e722879f290537184d7c6c2ce46e4715.png_400x400q80.png_.avif",
    Daraztitle:"Pro White TWS Airpods Sound & High Quality Touch Sensors True Stereo Headphones with Built in Mic 10m Transmission Bluetooth Wireless Earbuds , Sport Headset for all Bluetooth Smart devices",
    Darazprice:"Rs.799",
},
    
     {
    Darazpick:"https://img.drz.lazcdn.com/static/pk/p/8455640cfd00aa4504ccf513a2b4ca0d.jpg_400x400q80.jpg_.avif",
    Daraztitle:"Best quality personalize High Shining ring with free name engraving with box",
    Darazprice:"Rs.89",
},
    
     {
    Darazpick:"https://img.drz.lazcdn.com/static/pk/p/7bc41cba6a3a49973c3021772760c37b.png_400x400q80.png_.avif",
    Daraztitle:"Butterfly Breathables Maxi Thick Cottony Sanitary Pads Long Value Pack 18 Pcs",
    Darazprice:"Rs.640",
},
    
     {
    Darazpick:"https://img.drz.lazcdn.com/static/pk/p/f48567eb854c7d4d1658405bbe443822.jpg_400x400q80.jpg_.avif",
    Daraztitle:"Bathroom Anti Slip Slippers, Cheap Rubber Slippers, Rubber House Slippers, Washroom Soft Rubber Slipper, Shower SlipperWashroom Anti-Slip Slippers, House Slippers",
    Darazprice:"Rs.249",
},
    
     {
    Darazpick:"https://img.drz.lazcdn.com/static/pk/p/6009047c6727b43eb9ae56e73c95241d.jpg_400x400q80.jpg_.avif",
    Daraztitle:"Luxury Cute AirPods Pro Case, Premium Protective Cover for Apple AirPods Pro",
    Darazprice:"Rs.169",
},
    
     {
    Darazpick:"https://img.drz.lazcdn.com/static/pk/p/e7775740c2a31d8f862c0ced1615d401.jpg_400x400q80.jpg_.avif",
    Daraztitle:"Pro White TWS Airpods Sound & High Quality Touch Sensors True Stereo Headphones with Built in Mic 10m Transmission Bluetooth Wireless Earbuds , Sport Headset for all Bluetooth Smart devices",
    Darazprice:"Rs.684",
},
    
     {
    Darazpick:"https://img.drz.lazcdn.com/static/pk/p/91c4daf8379264a41356357c6d923d41.jpg_400x400q80.jpg_.avif",
    Daraztitle:"Orignal P47 Wireless Headset Bluetooth Foldable On-Ear Headphone Wireless Earbuds Invisible Ultra Small Bluetooth Handfree for all cell phones",
    Darazprice:"Rs.799",
},
    
     {
    Darazpick:"https://img.drz.lazcdn.com/static/pk/p/ccd1cdcc546df7e40212ef05919fd2ef.jpg_400x400q80.jpg_.avif",
    Daraztitle:"Slippers for men || House slipper for man || Slippers for boys || Stylish slippers for men",
    Darazprice:"Rs.329",
},
     {
    Darazpick:"https://img.drz.lazcdn.com/g/kf/S6d83cb9f519c4152a7a99979ea8b8725c.jpg_400x400q80.jpg_.avif",
    Daraztitle:"Premium Laptop bag, Travel bag",
    Darazprice:"Rs.566",
},
     {
    Darazpick:"https://img.drz.lazcdn.com/g/kf/Sc01905cd4a934ef89beee57867487ecen.jpg_400x400q80.jpg_.avif",
    Daraztitle:"Dior Sauvage Perfume For Men | Sauvage Dior | 100ml - Impression | Good Long Lasting | Savage Perfume",
    Darazprice:"Rs.580",
},
     {
    Darazpick:"https://img.drz.lazcdn.com/static/pk/p/0ffbf7e3b3224efeb6d8d22fe9b19b12.jpg_400x400q80.jpg_.avif",
    Daraztitle:"Silicone Moisturizing Gel Heel Socks – Unisex Foot Care and Comfort",
    Darazprice:"Rs.620",
},
     {
    Darazpick:"https://img.drz.lazcdn.com/static/pk/p/ccd1cdcc546df7e40212ef05919fd2ef.jpg_400x400q80.jpg_.avif",
    Daraztitle:"Slippers for men || House slipper for man || Slippers for boys || Stylish slippers for men",
    Darazprice:"Rs.329",
},
     {
    Darazpick:"https://img.drz.lazcdn.com/static/pk/p/a23211694bec17a3ca2e5bddbaf41ddd.png_400x400q80.png_.avif",
    Daraztitle:"Shah Kamal Fabrics 3 Pieces Unstitched Katan Silk Plain Shirt & Trouser With Organza Lining Dupatta For Womens & Girls-32 Color Available",
    Darazprice:"Rs.620",
},
     {
    Darazpick:"https://img.drz.lazcdn.com/static/pk/p/b00e39db932875896cba278e424d9c2f.png_400x400q80.png_.avif",
    Daraztitle:"Moon Touch Lip & Cheek Tint – 20ml – Natural Finish – Hydrating & Long-Lasting – 7 Shades",
    Darazprice:"Rs.549",
},
     {
    Darazpick:"https://img.drz.lazcdn.com/g/kf/S498c1d537b334869940655a54bd8edb6l.jpg_400x400q80.jpg_.avif",
    Daraztitle:"G01 Neckband Bluetooth Headset - Waterproof, Long Battery Life",
    Darazprice:"Rs.530",
},
     {
    Darazpick:"https://img.drz.lazcdn.com/static/pk/p/b829d9164429f20393786d5c8bd0d459.jpg_400x400q80.jpg_.avif",
    Daraztitle:"Brown Genuine Leather Wallet For Men/Premium Quality Leather Wallet For Men/Boys",
    Darazprice:"Rs.289",
},
     {
    Darazpick:"https://img.drz.lazcdn.com/static/pk/p/a80892ee5eb9f5a088f67028ea4ea53b.jpg_400x400q80.jpg_.avif",
    Daraztitle:"Premium Slides & Slippers for Men Comfortable & Stylish Footwear",
    Darazprice:"Rs.499",
},
     {
    Darazpick:"https://img.drz.lazcdn.com/static/pk/p/24b82c3876c311bdf687dcf68dee70ba.jpg_400x400q80.jpg_.avif",
    Daraztitle:"Dell Pro Sleeve 13 (Original)",
    Darazprice:"Rs.2799",
},
     {
    Darazpick:"https://img.drz.lazcdn.com/g/kf/S49caa9edd8ac4226a75bef766721cb4fN.jpg_400x400q80.jpg_.avif",
    Daraztitle:"JEANS FOR MEN'S | Blue ,Light Blue,Black| Stretchable, Denim, Straight| Export Quality",
    Darazprice:"Rs.369",
},
     {
    Darazpick:"https://img.drz.lazcdn.com/static/pk/p/6d7ed11cd11543c8592839ee0fb0818b.jpg_400x400q80.jpg_.avif",
    Daraztitle:"Beautiful Glass Bottle Water Bottle with Vacuum Flask and Loop (400 ML) Temperature Resistant for Hot and Cold Water, Milk, Lassi, Juice, Smoothie...",
    Darazprice:"Rs.349",
},
     {
    Darazpick:"https://img.drz.lazcdn.com/static/pk/p/96132b60e201d0c2dbe73d015b5c456b.png_400x400q80.png_.avif",
    Daraztitle:"TRIMUX PROFESSIONAL T9 DRAGON STYLE TRIMMER FOR MEN, Usb Rechargeable Outline Edger Beard Trimmer, GROOMING KIT FOR MEN",
    Darazprice:"Rs.999",
},
     {
    Darazpick:"https://img.drz.lazcdn.com/static/pk/p/3d84ff8a217a68d6479f9973882e58b5.jpg_400x400q80.jpg_.avif",
    Daraztitle:"Stylish Pocket Winter Jacket and Upper for Men Fine Stitched - Premium Quality and Fashionable Outerwear",
    Darazprice:"Rs.1399",
},
     {
    Darazpick:"https://img.drz.lazcdn.com/static/pk/p/b1cce552c1adc3bc365078104c78b432.jpg_400x400q80.jpg_.avif",
    Daraztitle:"Stylish 7 yards Stitched Silk Saree For Women",
    Darazprice:"Rs.2750",
},
     {
    Darazpick:"https://img.drz.lazcdn.com/g/kf/S1073e035e3974d5c8e39303d9e1db96eS.jpg_400x400q80.jpg_.avif",
    Daraztitle:"3Pcs Large Foldable Clothes Storage Zipper Bag",
    Darazprice:"Rs.269",
},
     {
    Darazpick:"https://img.drz.lazcdn.com/g/kf/Sabd1ff14aa6544ce9d35661f1576bba8Z.jpg_400x400q80.jpg_.avif",
    Daraztitle:"New Collection PACK OF 3 TROUSER'S For Men And women, China jersey Fabric , Handwashable And Stretchable Materia",
    Darazprice:"Rs.1099",
},
     {
    Darazpick:"https://img.drz.lazcdn.com/static/pk/p/9bfd9ae12bb99961ea97a3594dc4633f.jpg_400x400q80.jpg_.avif",
    Daraztitle:"Antique Broken Heart Shaped Silver Locket with Black and Silver Chain Necklace for Lovers and Best Friends",
    Darazprice:"Rs.169",
},
     {
    Darazpick:"https://img.drz.lazcdn.com/g/kf/S7a60fd0641684131b132bcf03c059708S.jpg_400x400q80.jpg_.avif",
    Daraztitle:"Aura arabic watch for boys best luxury watch black watch for men original black matte aura watch arabic dial high quality watches best fot gift ",
    Darazprice:"Rs.549",
},
    
    
]

function Daraz() {
  return (
    <div>
        <h1>Flash Sale</h1>
        <div className="Ecommerence">
           {
             DarazData.map((meradaraz)=>{
                return<Darazs{...meradaraz}/>

            }
            
            )
           }

        </div>
        <h1>Catagoies</h1>
        <div className="Ecommerence">
           {
             Darazcatagories.map((meradaraz)=>{
                return<Darazss{...meradaraz}/>

            }
            
            )
           }

        </div>
        <h1>Just For You</h1>
        <div className="Ecommerence">
           {
             Yourdaraz.map((meradaraz)=>{
                return<Darazsss{...meradaraz}/>

            }
            
            )
           }

        </div>
        
      
    </div>
  )
}

export default Daraz


function Darazs(props){
    console.log(props)
    return(
        <div className="Darazinput">
            <img src={props.Darazpick} alt="pick" />
            <h5>{props.Daraztitle}</h5>
            <h3>{props.Darazprice}</h3>
            <h1>{props.Darazpercentage}</h1>
        </div>

        
    
    )
    
}
function Darazss(props){
    console.log(props)
    return(
        <div className="Datacatagories">
            <img src={props.Darazpick} alt="pick" />
             <h2>{props.Daraztitle}</h2>
        </div>

        
    
    )
    
}
function Darazsss(props){
    console.log(props)
    return(
        <div className="yourdata">
            <img src={props.Darazpick} alt="pick" />
             <h2>{props.Daraztitle}</h2>
             <h3>{props.Darazprice}</h3>
        </div>

        
    
    )
    
}
