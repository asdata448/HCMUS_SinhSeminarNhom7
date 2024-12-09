// Data for each equipment and its description
const equipmentData = {
    pipette: {
        name: "Pipette",
        description: "Pipette là dụng cụ dùng để lấy và chuyển một lượng nhỏ chất lỏng với độ chính xác cao. Thường được dùng trong các thí nghiệm PCR để chuyển mẫu và dung dịch."
    },
    centrifuge: {
        name: "Centrifuge",
        description: "Centrifuge là thiết bị quay ly tâm, giúp phân tách các thành phần trong hỗn hợp bằng cách sử dụng lực ly tâm."
    },
    thermalCycler: {
        name: "Thermal Cycler",
        description: "Thermal Cycler là thiết bị thực hiện phản ứng PCR, điều khiển chu kỳ nhiệt độ để khuếch đại DNA theo các chu kỳ nhiệt."
    }
};

// Show equipment information when an equipment is clicked
function showInfo(equipmentId) {
    const infoBox = document.getElementById("infoBox");
    const equipmentName = document.getElementById("equipmentName");
    const equipmentDescription = document.getElementById("equipmentDescription");

    // Get data for clicked equipment
    const equipment = equipmentData[equipmentId];

    // Update the info box content
    equipmentName.innerText = equipment.name;
    equipmentDescription.innerText = equipment.description;

    // Show the info box
    infoBox.classList.remove("hidden");
}

// Close the info box
function closeInfo() {
    document.getElementById("infoBox").classList.add("hidden");
}
