(function() {var implementors = {
"jf_plonk":[["impl&lt;E: Pairing&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.182/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"jf_plonk/proof_system/structs/struct.BatchProof.html\" title=\"struct jf_plonk::proof_system::structs::BatchProof\">BatchProof</a>&lt;E&gt;"],["impl&lt;E: Pairing&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.182/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"jf_plonk/proof_system/structs/struct.Proof.html\" title=\"struct jf_plonk::proof_system::structs::Proof\">Proof</a>&lt;E&gt;"]],
"jf_primitives":[["impl&lt;E, H, Arity, N, T&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.182/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"jf_primitives/merkle_tree/namespaced_merkle_tree/struct.NMT.html\" title=\"struct jf_primitives::merkle_tree::namespaced_merkle_tree::NMT\">NMT</a>&lt;E, H, Arity, N, T&gt;<span class=\"where fmt-newline\">where\n    H: <a class=\"trait\" href=\"jf_primitives/merkle_tree/trait.DigestAlgorithm.html\" title=\"trait jf_primitives::merkle_tree::DigestAlgorithm\">DigestAlgorithm</a>&lt;E, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.71.1/std/primitive.u64.html\">u64</a>, T&gt; + <a class=\"trait\" href=\"jf_primitives/merkle_tree/namespaced_merkle_tree/trait.BindNamespace.html\" title=\"trait jf_primitives::merkle_tree::namespaced_merkle_tree::BindNamespace\">BindNamespace</a>&lt;E, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.71.1/std/primitive.u64.html\">u64</a>, T, N&gt;,\n    E: <a class=\"trait\" href=\"jf_primitives/merkle_tree/trait.Element.html\" title=\"trait jf_primitives::merkle_tree::Element\">Element</a> + <a class=\"trait\" href=\"jf_primitives/merkle_tree/namespaced_merkle_tree/trait.Namespaced.html\" title=\"trait jf_primitives::merkle_tree::namespaced_merkle_tree::Namespaced\">Namespaced</a>&lt;Namespace = N&gt; + CanonicalSerialize + CanonicalDeserialize,\n    T: <a class=\"trait\" href=\"jf_primitives/merkle_tree/trait.NodeValue.html\" title=\"trait jf_primitives::merkle_tree::NodeValue\">NodeValue</a> + CanonicalSerialize + CanonicalDeserialize,\n    N: <a class=\"trait\" href=\"jf_primitives/merkle_tree/namespaced_merkle_tree/trait.Namespace.html\" title=\"trait jf_primitives::merkle_tree::namespaced_merkle_tree::Namespace\">Namespace</a>,\n    Arity: <a class=\"trait\" href=\"https://docs.rs/typenum/1.16.0/typenum/marker_traits/trait.Unsigned.html\" title=\"trait typenum::marker_traits::Unsigned\">Unsigned</a>,</span>"],["impl&lt;H&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.182/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"jf_primitives/merkle_tree/hasher/struct.HasherNode.html\" title=\"struct jf_primitives::merkle_tree::hasher::HasherNode\">HasherNode</a>&lt;H&gt;<span class=\"where fmt-newline\">where\n    H: Digest,\n    Output&lt;H&gt;: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.182/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> + for&lt;'a&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.182/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'a&gt;,</span>"],["impl&lt;F: PrimeField&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.182/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"jf_primitives/signatures/schnorr/struct.SignKey.html\" title=\"struct jf_primitives::signatures::schnorr::SignKey\">SignKey</a>&lt;F&gt;"],["impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.182/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"jf_primitives/signatures/bls_over_bn254/struct.BLSOverBN254CurveSignatureScheme.html\" title=\"struct jf_primitives::signatures::bls_over_bn254::BLSOverBN254CurveSignatureScheme\">BLSOverBN254CurveSignatureScheme</a>"],["impl&lt;E, H, I, Arity, T&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.182/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"jf_primitives/merkle_tree/append_only/struct.MerkleTree.html\" title=\"struct jf_primitives::merkle_tree::append_only::MerkleTree\">MerkleTree</a>&lt;E, H, I, Arity, T&gt;<span class=\"where fmt-newline\">where\n    E: <a class=\"trait\" href=\"jf_primitives/merkle_tree/trait.Element.html\" title=\"trait jf_primitives::merkle_tree::Element\">Element</a> + CanonicalSerialize + CanonicalDeserialize,\n    H: <a class=\"trait\" href=\"jf_primitives/merkle_tree/trait.DigestAlgorithm.html\" title=\"trait jf_primitives::merkle_tree::DigestAlgorithm\">DigestAlgorithm</a>&lt;E, I, T&gt;,\n    I: <a class=\"trait\" href=\"jf_primitives/merkle_tree/trait.Index.html\" title=\"trait jf_primitives::merkle_tree::Index\">Index</a> + CanonicalSerialize + CanonicalDeserialize,\n    Arity: <a class=\"trait\" href=\"https://docs.rs/typenum/1.16.0/typenum/marker_traits/trait.Unsigned.html\" title=\"trait typenum::marker_traits::Unsigned\">Unsigned</a>,\n    T: <a class=\"trait\" href=\"jf_primitives/merkle_tree/trait.NodeValue.html\" title=\"trait jf_primitives::merkle_tree::NodeValue\">NodeValue</a>,</span>"],["impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.182/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"jf_primitives/signatures/bls_over_bn254/struct.SignKey.html\" title=\"struct jf_primitives::signatures::bls_over_bn254::SignKey\">SignKey</a>"],["impl&lt;P, V&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.182/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"jf_primitives/vid/advz/struct.Share.html\" title=\"struct jf_primitives::vid::advz::Share\">Share</a>&lt;P, V&gt;<span class=\"where fmt-newline\">where\n    P: <a class=\"trait\" href=\"jf_primitives/pcs/trait.PolynomialCommitmentScheme.html\" title=\"trait jf_primitives::pcs::PolynomialCommitmentScheme\">PolynomialCommitmentScheme</a>,\n    V: <a class=\"trait\" href=\"jf_primitives/merkle_tree/trait.MerkleTreeScheme.html\" title=\"trait jf_primitives::merkle_tree::MerkleTreeScheme\">MerkleTreeScheme</a>,\n    V::<a class=\"associatedtype\" href=\"jf_primitives/merkle_tree/trait.MerkleTreeScheme.html#associatedtype.MembershipProof\" title=\"type jf_primitives::merkle_tree::MerkleTreeScheme::MembershipProof\">MembershipProof</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.71.1/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.71.1/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"https://docs.rs/serde/1.0.182/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a>,</span>"],["impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.182/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"jf_primitives/signatures/bls_over_bls12381/struct.BLSSignKey.html\" title=\"struct jf_primitives::signatures::bls_over_bls12381::BLSSignKey\">BLSSignKey</a>"],["impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.182/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"jf_primitives/signatures/bls_over_bls12381/struct.BLSVerKey.html\" title=\"struct jf_primitives::signatures::bls_over_bls12381::BLSVerKey\">BLSVerKey</a>"],["impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.182/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"jf_primitives/signatures/bls_over_bn254/struct.VerKey.html\" title=\"struct jf_primitives::signatures::bls_over_bn254::VerKey\">VerKey</a>"],["impl&lt;P&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.182/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"jf_primitives/signatures/schnorr/struct.KeyPair.html\" title=\"struct jf_primitives::signatures::schnorr::KeyPair\">KeyPair</a>&lt;P&gt;<span class=\"where fmt-newline\">where\n    P: Config,</span>"],["impl&lt;P&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.182/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"jf_primitives/signatures/schnorr/struct.Signature.html\" title=\"struct jf_primitives::signatures::schnorr::Signature\">Signature</a>&lt;P&gt;<span class=\"where fmt-newline\">where\n    P: Config,</span>"],["impl&lt;P, V&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.182/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"jf_primitives/vid/advz/struct.Common.html\" title=\"struct jf_primitives::vid::advz::Common\">Common</a>&lt;P, V&gt;<span class=\"where fmt-newline\">where\n    P: <a class=\"trait\" href=\"jf_primitives/pcs/trait.PolynomialCommitmentScheme.html\" title=\"trait jf_primitives::pcs::PolynomialCommitmentScheme\">PolynomialCommitmentScheme</a>,\n    V: <a class=\"trait\" href=\"jf_primitives/merkle_tree/trait.MerkleTreeScheme.html\" title=\"trait jf_primitives::merkle_tree::MerkleTreeScheme\">MerkleTreeScheme</a>,\n    V::<a class=\"associatedtype\" href=\"jf_primitives/merkle_tree/trait.MerkleTreeScheme.html#associatedtype.NodeValue\" title=\"type jf_primitives::merkle_tree::MerkleTreeScheme::NodeValue\">NodeValue</a>: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.182/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a>,</span>"],["impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.182/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"jf_primitives/aead/struct.KeyPair.html\" title=\"struct jf_primitives::aead::KeyPair\">KeyPair</a>"],["impl&lt;P&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.182/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"jf_primitives/signatures/schnorr/struct.VerKey.html\" title=\"struct jf_primitives::signatures::schnorr::VerKey\">VerKey</a>&lt;P&gt;<span class=\"where fmt-newline\">where\n    P: Config,</span>"],["impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.182/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"jf_primitives/aead/struct.Ciphertext.html\" title=\"struct jf_primitives::aead::Ciphertext\">Ciphertext</a>"],["impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.182/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"jf_primitives/signatures/bls_over_bls12381/struct.BLSSignature.html\" title=\"struct jf_primitives::signatures::bls_over_bls12381::BLSSignature\">BLSSignature</a>"],["impl&lt;E, H, I, Arity, T&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.182/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"jf_primitives/merkle_tree/universal_merkle_tree/struct.UniversalMerkleTree.html\" title=\"struct jf_primitives::merkle_tree::universal_merkle_tree::UniversalMerkleTree\">UniversalMerkleTree</a>&lt;E, H, I, Arity, T&gt;<span class=\"where fmt-newline\">where\n    E: <a class=\"trait\" href=\"jf_primitives/merkle_tree/trait.Element.html\" title=\"trait jf_primitives::merkle_tree::Element\">Element</a> + CanonicalSerialize + CanonicalDeserialize,\n    H: <a class=\"trait\" href=\"jf_primitives/merkle_tree/trait.DigestAlgorithm.html\" title=\"trait jf_primitives::merkle_tree::DigestAlgorithm\">DigestAlgorithm</a>&lt;E, I, T&gt;,\n    I: <a class=\"trait\" href=\"jf_primitives/merkle_tree/trait.Index.html\" title=\"trait jf_primitives::merkle_tree::Index\">Index</a> + CanonicalSerialize + CanonicalDeserialize,\n    Arity: <a class=\"trait\" href=\"https://docs.rs/typenum/1.16.0/typenum/marker_traits/trait.Unsigned.html\" title=\"trait typenum::marker_traits::Unsigned\">Unsigned</a>,\n    T: <a class=\"trait\" href=\"jf_primitives/merkle_tree/trait.NodeValue.html\" title=\"trait jf_primitives::merkle_tree::NodeValue\">NodeValue</a>,</span>"],["impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.182/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"jf_primitives/signatures/bls_over_bn254/struct.Signature.html\" title=\"struct jf_primitives::signatures::bls_over_bn254::Signature\">Signature</a>"],["impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.182/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"jf_primitives/aead/struct.EncKey.html\" title=\"struct jf_primitives::aead::EncKey\">EncKey</a>"],["impl&lt;E, H, I, Arity, T&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.182/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"jf_primitives/merkle_tree/light_weight/struct.LightWeightMerkleTree.html\" title=\"struct jf_primitives::merkle_tree::light_weight::LightWeightMerkleTree\">LightWeightMerkleTree</a>&lt;E, H, I, Arity, T&gt;<span class=\"where fmt-newline\">where\n    E: <a class=\"trait\" href=\"jf_primitives/merkle_tree/trait.Element.html\" title=\"trait jf_primitives::merkle_tree::Element\">Element</a> + CanonicalSerialize + CanonicalDeserialize,\n    H: <a class=\"trait\" href=\"jf_primitives/merkle_tree/trait.DigestAlgorithm.html\" title=\"trait jf_primitives::merkle_tree::DigestAlgorithm\">DigestAlgorithm</a>&lt;E, I, T&gt;,\n    I: <a class=\"trait\" href=\"jf_primitives/merkle_tree/trait.Index.html\" title=\"trait jf_primitives::merkle_tree::Index\">Index</a> + CanonicalSerialize + CanonicalDeserialize,\n    Arity: <a class=\"trait\" href=\"https://docs.rs/typenum/1.16.0/typenum/marker_traits/trait.Unsigned.html\" title=\"trait typenum::marker_traits::Unsigned\">Unsigned</a>,\n    T: <a class=\"trait\" href=\"jf_primitives/merkle_tree/trait.NodeValue.html\" title=\"trait jf_primitives::merkle_tree::NodeValue\">NodeValue</a>,</span>"]],
"jf_utils":[["impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.182/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"jf_utils/struct.CanonicalBytes.html\" title=\"struct jf_utils::CanonicalBytes\">CanonicalBytes</a>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()