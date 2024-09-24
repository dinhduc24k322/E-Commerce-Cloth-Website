"use client";

import Add from "@/components/Add";
import CustomizeProducts from "@/components/CustomizeProducts";
import ProductImages from "@/components/ProductImages";
import React from "react";

const Singlepage = () => {
  return (
    <div className="px-4 md:px-8 lg:px16 xl:32 2xl:px-64 relative flex flex-col lg:flex-row gap-16">
      {/*IMG*/}
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
        <ProductImages />
      </div>
      {/* TEXTS */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <h1 className="text-4xl font-medium">Áo thun cổ tròn</h1>
        <p className="text-gray-500">
          Áo thun cổ tròn được làm từ chất liệu cotton mềm mại, thấm hút mồ hôi
          tốt, mang lại cảm giác thoải mái và thoáng mát suốt cả ngày. Thiết kế
          đơn giản với form dáng vừa vặn, tôn lên sự trẻ trung và năng động. Áo
          có nhiều màu sắc đa dạng, dễ dàng phối hợp với quần jeans, quần short
          hoặc chân váy để tạo nên phong cách thời trang cá tính, phù hợp với
          nhiều dịp như đi học, đi làm, hoặc dạo phố. Chất liệu bền đẹp, không
          xù lông sau nhiều lần giặt, là lựa chọn hoàn hảo cho tủ đồ của bạn.
        </p>
        <div className="h-[2px] bg-gray-100" />
        <div className="flex items-center gap-4">
          <h3 className="text-xl text-gray-500 line-through">đ150.000</h3>
          <h2 className="font-medium text-2xl">đ130.000</h2>
          <h3></h3>
        </div>
        <div className="h-[2px] bg-gray-100" />
        <CustomizeProducts />
        <Add />
        <div className="h-[2px] bg-gray-100" />
        <div className="text-sm">
          <h4>Title</h4>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque
            perferendis pariatur dolores corrupti sint rem adipisci autem
            exercitationem id tenetur. Itaque consectetur asperiores veritatis
            excepturi quo quisquam, cumque eveniet iure?
          </p>
        </div>
        <div className="text-sm">
          <h4>Title</h4>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque
            perferendis pariatur dolores corrupti sint rem adipisci autem
            exercitationem id tenetur. Itaque consectetur asperiores veritatis
            excepturi quo quisquam, cumque eveniet iure?
          </p>
        </div>
        <div className="text-sm">
          <h4>Title</h4>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque
            perferendis pariatur dolores corrupti sint rem adipisci autem
            exercitationem id tenetur. Itaque consectetur asperiores veritatis
            excepturi quo quisquam, cumque eveniet iure?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Singlepage;
