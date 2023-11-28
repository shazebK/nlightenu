import React from "react";
import { Link } from "react-router-dom";
import ImageTitleCard from "../components/UI/ImageTitleCard";
import ArticleCard from "../components/UI/ArticleCard";

const Home = () => {
    const articles = [
            {
                "_id": "6566251a25ec81b5e57e092f",
                "author": "shazebK",
                "title": "Data Structures",
                "content": "A data structure is not only used for organizing the data. It is also used for processing, retrieving, and storing data. There are different basic and advanced types of data structures that are used in almost every program or software system that has been developed. So we must have good knowledge about data structures. \r\n\r\n\r\n   Linear data structure: Data structure in which data elements are arranged sequentially or linearly, where each element is attached to its previous and next adjacent elements, is called a linear data structure. \r\n    Examples of linear data structures are array, stack, queue, linked list, etc.\r\n        Static data structure: Static data structure has a fixed memory size. It is easier to access the elements in a static data structure. \r\n        An example of this data structure is an array.\r\n        Dynamic data structure: In dynamic data structure, the size is not fixed. It can be randomly updated during the runtime which may be considered efficient concerning the memory (space) complexity of the code. \r\n        Examples of this data structure are queue, stack, etc.\r\n    Non-linear data structure: Data structures where data elements are not placed sequentially or linearly are called non-linear data structures. In a non-linear data structure, we can’t traverse all the elements in a single run only. \r\n    Examples of non-linear data structures are trees and graphs.\r\n",
                "imageUrl": "http://localhost:8080/images/1701192986749data_structures.jpg",
                "date": "28 Nov 2023"
            },
            {
                "_id": "656625d025ec81b5e57e0930",
                "author": "shazebK",
                "title": "The Linux Kernel vs. Linux OS",
                "content": "\r\nIt’s common to hear the term Linux used to refer to any operating system that uses Linux as its kernel. Technically speaking, though, Linux is just a kernel. The rest of the software that runs on a Linux-based operating system – such as graphical user interfaces, Web browsers, and productivity applications – is not part of the Linux kernel. It’s provided by other projects.\r\n\r\nFor that reason, you may sometimes hear people use the term GNU/Linux to refer to Linux-based operating systems, such as Ubuntu or Red Hat Enterprise Linux.\r\n\r\nThey do this because many (though not all) of the programs that developers combine with the Linux kernel to create a complete Linux-based OS are developed by the GNU project, which creates a wide range of open source software. Linux is not developed by GNU, and so to give credit to the work of GNU developers in addition to the Linux kernel developers, people use the phrase GNU/Linux.\r\n\r\nBut other times, they might say just Linux when they’re referring to a complete Linux OS, not just the Linux kernel.\r\n\r\nThe bottom line here is that the term Linux can be used to refer specifically to the kernel or to any operating system that uses the Linux kernel in addition to programs from other sources in order to provide a complete operating system.\r\nLinux vs. Unix\r\n\r\nYou may also sometimes hear people use the term Linux somewhat interchangeably with Unix. This is because the Linux kernel is designed to operate in the same way as the kernel for Unix, an operating system developed between 1969 and the mid-1990s.\r\n\r\nBecause the Unix kernel was only compatible with certain types of computer hardware and was subject to licensing restrictions, a number of programmers developed their own kernels to serve as alternatives to the Unix kernel. Linux is one example of these alternatives.\r\n\r\nOther popular examples include the kernels used by FreeBSD, NetBSD, and even macOS.\r\n\r\nTo be clear, Linux does not use any source code from Unix. It’s simply designed to work similarly to the Unix kernel. For that reason, Linux is often described as a Unix-like kernel. Linux can be used to run systems that are like Unix, but Linux is not Unix.\r\nLinux Kernel Architecture\r\n\r\nLike most modern kernels, the Linux kernel uses what’s known as a monolithic kernel architecture. This means that the kernel runs as a single program.\r\n\r\nAn alternative to Linux’s kernel architecture is the microkernel architecture, which breaks the kernel into smaller, discrete programs. Microkernels were a popular concept in the 1980s and 1990s, but many attempts to implement them were not as successful as hoped.\r\n\r\nOperating systems like macOS have adopted some microkernel features (although their kernel architectures are also partly monolithic, which is why macOS is usually described as having a hybrid kernel architecture), but Linux has retained a monolithic architectural style throughout its history.",
                "imageUrl": "http://localhost:8080/images/1701193168275linux.jpg",
                "date": "28 Nov 2023"
            },
            {
                "_id": "6566264e25ec81b5e57e0931",
                "author": "shazebK",
                "title": "Future of Cryptography",
                "content": "Cryptography is the process of hiding or coding information so that only the person a message was intended for can read it. The art of cryptography has been used to code messages for thousands of years and continues to be used in bank cards, computer passwords, and ecommerce.\r\n\r\nModern cryptography techniques include algorithms and ciphers that enable the encryption and decryption of information, such as 128-bit and 256-bit encryption keys. Modern ciphers, such as the Advanced Encryption Standard (AES), are considered virtually unbreakable. \r\n\r\nA common cryptography definition is the practice of coding information to ensure only the person that a message was written for can read and process the information. This cybersecurity practice, also known as cryptology, combines various disciplines like computer science, engineering, and mathematics to create complex codes that hide the true meaning of a message.\r\n\r\nCryptography can be traced all the way back to ancient Egyptian hieroglyphics but remains vital to securing communication and information in transit and preventing it from being read by untrusted parties. It uses algorithms and mathematical concepts to transform messages into difficult-to-decipher codes through techniques like cryptographic keys and digital signing to protect data privacy, credit card transactions, email, and web browsing.\r\n",
                "imageUrl": "http://localhost:8080/images/1701193294383crypto.png",
                "date": "28 Nov 2023"
            }
        ]
    return (
        <>
        <div className="w-full flex justify-around items-center">
            <div className="w-3/5">
                <h1 className="text-[40px] font-bold leading-10 my-4">Learn Smart <br/> Enlighten Your Path</h1>
                <p>
                    Nlightenu empower users in their quest for knowledge.
                    With our platform, users can seamlessly access a diverse range of courses, explore an array of insightful articles, and create their own content. 
                    With cutting-edge AI integration, which recommends the most relevant and enriching materials for users' specific interests and subjects of study.
                    Whether you're seeking to expand your horizons, enhance your skills, or share your wisdom with the world, Nlightenu is your gateway to a world of limitless learning possibilities. 
                    Welcome to a brighter way of learning at Nlightenu.
                </p>
            </div>
            <div className="h-4/5 w-1/3">
                <img src = "/images/home_para.png" className = "h-full w-full object-cover" alt = "home_image"/>
            </div>
        </div>

        <div className="flex justify-around items-center my-12">
            <Link to = "/articles"><ImageTitleCard image = "./images/articles.jpg" title="Read and Create Articles"/></Link>
            <a href = "https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems"><ImageTitleCard image = "./images/courses.jpg" title="Explore Courses"/></a>
            <ImageTitleCard image = "./images/ai.jpg" title="Craft AI Based Course"/>
        </div>

        <div className="w-full px-12 my-12">
            <h2 className="text-[32px] font-bold">Top Courses</h2>
            <div className="w-full grid grid-cols-3 justify-items-center columns-3 gap-y-8">
            <ImageTitleCard image = "./images/articles.jpg" title = "Learn Machine Learning"/>
            <ImageTitleCard image = "./images/Reactjs.png" title = "ReactJS"/>
            <ImageTitleCard image = "./images/c++.png" title = "Master C++"/>
            <ImageTitleCard image = "./images/Nodejs.jpg" title = "Backend with NodeJs"/>
            <ImageTitleCard image = "./images/uiux.png" title = "Get pro in UX"/>
            <ImageTitleCard image = "./images/python.png" title = "Python in 100 days"/>
            </div> 
            <h2 className="text-[16px] font-bold my-4 cursor-pointer text-right">View More</h2>
        </div>

        <div className="w-full px-12 my-12">
            <h2 className="text-[32px] font-bold">Trending Articles</h2>
            <div className="w-full flex flex-col items-center">
            {
            articles.map((article) => <Link to={"articles/" + article._id} key = {article._id}><ArticleCard article = {article}/></Link>)
            }
            </div> 
            <h2 className="text-[16px] font-bold my-4 cursor-pointer text-right">View More</h2>
        </div>
        </>
    );
}

export default Home;