import { getParam, loadHeaderFooter } from "./utils.mjs";
import ExternalServices from "./ExternalServices.mjs";
import ProductDetails from "./ProductDetails.mjs";

loadHeaderFooter();

const dataSource = new ExternalServices("tents");
const productID = getParam("product");

const product = new ProductDetails(productID, dataSource);
product.init();

document.getElementById('comment-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const commentText = document.getElementById('comment-text').value;
    
    if (commentText) {
        // Aquí podrías enviar el comentario a un servidor
        addComment(commentText);
        document.getElementById('comment-text').value = ''; // Limpiar el campo
    }
});

function addComment(text) {
    const commentsList = document.getElementById('comments-list');
    const commentDiv = document.createElement('div');
    commentDiv.classList.add('comment');
    commentDiv.textContent = text;
    commentsList.appendChild(commentDiv);
}