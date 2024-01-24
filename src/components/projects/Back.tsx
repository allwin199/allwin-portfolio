"use client";

import { useRouter } from "next/navigation";
import { IoArrowBackCircleOutline } from "react-icons/io5";

const Back = () => {
    const router = useRouter();

    return (
        <div className="mb-4">
            <div
                onClick={() => router.back()}
                className="hover: cursor-pointer"
            >
                <IoArrowBackCircleOutline size={22} className="text-gray-500" />
            </div>
        </div>
    );
};

export default Back;
