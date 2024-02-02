"use client";

import { useRouter } from "next/navigation";
import { IoArrowBackCircleOutline } from "react-icons/io5";

const Back = () => {
    const router = useRouter();

    return (
        <div className="mb-4">
            <IoArrowBackCircleOutline
                size={22}
                className="text-gray-500 hover: cursor-pointer"
                onClick={() => router.back()}
            />
        </div>
    );
};

export default Back;
