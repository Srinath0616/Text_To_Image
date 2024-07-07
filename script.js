const token = "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"
const inputTxt = document.getElementById("input")
const image = document.getElementById("image")
const button = document.getElementById("btn")
async function query() {
	image.src = "/Loading1.gif"
	const response = await fetch(
		"https://api-inference.huggingface.co/models/runwayml/stable-diffusion-v1-5",
		{
			headers: { Authorization: `Bearer ${token}`},
			method: "POST",
			body: JSON.stringify({"inputs": inputTxt.value }),
		}
	);
	const result = await response.blob();
	return result;
}

button.addEventListener('click', async function () {
	query().then((response) => {
		// Use image
		const objectURL = URL.createObjectURL(response)
		image.src = objectURL
	});
})
