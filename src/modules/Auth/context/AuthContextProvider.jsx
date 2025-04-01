import { useNavigate } from "react-router-dom";
import AuthContext from "./AuthContext";
import { useEffect, useRef, useState } from "react";
import { loginService, registerService } from "../services/auth";

const AuthContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [profileData, setProfileData] = useState({
    profileImageUrl: "",
    contactNo: "",
    skills: [],
    link: "",
  });
  const [newSkill, setNewSkill] = useState("");
  const fileInputRef = useRef(null);

  useEffect(() => {
    const previousData = {
      profileImageUrl: "https://via.placeholder.com/150",
      contactNo: "123-456-7890",
      skills: ["React", "JavaScript", "Tailwind CSS"],
      link: "https://github.com/username",
    };
    setProfileData(previousData);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prev) => ({ ...prev, [name]: value }));
  };

  const addSkill = () => {
    if (newSkill.trim() && !profileData.skills.includes(newSkill.trim())) {
      setProfileData((prev) => ({
        ...prev,
        skills: [...prev.skills, newSkill.trim()],
      }));
      setNewSkill("");
    }
  };

  const removeSkill = (skillToRemove) => {
    setProfileData((prev) => ({
      ...prev,
      skills: prev.skills.filter((skill) => skill !== skillToRemove),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/update/profile", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(profileData),
      });
      const data = await response.json();
      if (data.success) {
        alert("Profile updated successfully!");
        navigate("/profile");
      } else {
        alert("Profile update failed");
      }
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileData((prev) => ({ ...prev, profileImageUrl: imageUrl }));
    }
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const mutationLogin = useMutation({
    mutationFn: loginService,
    onSuccess: (res) => {
      console.log("Logged in successfully", res);
      navigate("/app");
    },
    onError: () => {
      console.log("Login failed");
    },
  });

  const handleLogin = async (e) => {
    e.preventDefault();
    const payLoad = {
      email: email,
      password: password,
    };
    console.log(payLoad);
    mutationLogin.mutate(payLoad);
  };

  const mutationRegister = useMutation({
    mutationFn: registerService,
    onSuccess: (res) => {
      console.log("Registered successfully", res);
      navigate("/app");
    },
    onError: () => {
      console.log("Register failed");
    },
  });

  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      console.log("Password and Confirm Password are not same");
      return;
    }
    const payLoad = {
      name: name,
      email: email,
      password: password,
      role: "developer",
    };
    console.log(payLoad);
    mutationRegister.mutate(payLoad);
  };

  return (
    <AuthContext.Provider
      value={{
        handleSubmit,
        removeSkill,
        addSkill,
        handleChange,
        profileData,
        newSkill,
        setNewSkill,
        fileInputRef,
        handleImageUpload,
        email,
        setEmail,
        password,
        setPassword,
        handleLogin,
        fullName,
        setFullName,
        confirmPassword,
        setConfirmPassword,
        handleRegister,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
