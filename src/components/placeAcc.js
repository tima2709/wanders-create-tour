import accommodationStyle from "./accommodations/styles.module.css";
import MinusIcon from "./icons/minusIcon";
import PlusIcon from "./icons/plusIcon";
import CustomSelect from "./UI/customSelect";
import CustomInput from "./UI/customInput";
import DescReactQuill from "./UI/descReactQuill/descReactQuill";
import InputFileBtn from "./UI/InputFileBtn";
import React from "react";

// tourHotels.map((item, index) => (
//     <div key={index}>
//         <li><h1>Место проживания</h1></li>
//         <div className={accommodationStyle.qtyNights}>
//             <button
//                 type="button"
//                 disabled={tourHotels[index].qtyNight === 1}
//                 onClick={() => handleMinusQtyNights(index)}
//             >
//                 <MinusIcon/>
//             </button>
//             <span>{tourHotels[index].qtyNight}</span>
//             <button type="button" onClick={() => handlePlusQtyNights(index)}>
//                 <PlusIcon/>
//             </button>
//         </div>
//
//         <h3>Варианты проживания на выбор в этот период тура</h3>
//         <div className={accommodationStyle.select_variants}>
//             <CustomSelect
//                 option={accommodationComfort}
//                 value={item.type?.value}
//                 onChange={(e) => handleChangeHotelType(e?.value, index)}
//             />
//         </div>
//         <div className={accommodationStyle.acc_title}>
//             <CustomInput
//                 type="text"
//                 name={'hotelTitle'}
//                 placeholder={'Заголовок'}
//                 value={item.hotelTitle}
//                 onChange={(e) => handleChangeHotelTitle(e.target.value, index)}
//             />
//         </div>
//         <div className={accommodationStyle.acc_desc}>
//             <DescReactQuill
//                 value={item.hotelDescription}
//                 onChange={(e) => handleChangeHotelDesc(e, index)}
//             />
//         </div>
//         <div className={accommodationStyle.upload_pic}>
//             <h3>Добавить фотографии</h3>
//             <InputFileBtn onChange={(e) => handleChangeHotelImages(e.target.files, index)}/>
//         </div>
//
//     </div>
// ))